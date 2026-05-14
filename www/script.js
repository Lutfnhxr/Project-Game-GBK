console.log("GAME START");

/* ================= FIREBASE ================= */

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: ""
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

/* ================= ELEMENT ================= */

const video = document.getElementById("video");
const statusText = document.getElementById("status");
const gestureText = document.getElementById("gesture");
const hasil = document.getElementById("hasil");
const playerInfo = document.getElementById("playerInfo");

/* ================= DATA ================= */

let playerName = "";
let roomCode = "";
let currentChoice = "";

/* ================= LOGIN ================= */

window.joinGame = function () {

    const name =
        document.getElementById("playerName").value;

    const room =
        document.getElementById("roomCode").value;

    if (!name || !room) {

        alert("Isi nama dan room!");

        return;
    }

    playerName = name.trim();
    roomCode = room.trim();

    document.getElementById("loginPage")
        .style.display = "none";

    document.getElementById("gamePage")
        .style.display = "block";

    playerInfo.innerText =
        "Player: " + playerName;

    listenRoom();

    startCamera();
};

/* ================= MANUAL BUTTON ================= */

window.manualChoice = function (choice) {

    let fullChoice = "";

    if (choice === "✊") {
        fullChoice = "✊ Batu";
    }

    if (choice === "✌️") {
        fullChoice = "✌️ Gunting";
    }

    if (choice === "🤚") {
        fullChoice = "🤚 Kertas";
    }

    currentChoice = fullChoice;

    gestureText.innerText =
        "Gesture: " + fullChoice;

    sendChoice(fullChoice);
};

/* ================= SEND FIREBASE ================= */

function sendChoice(choice) {

    console.log("SEND:", playerName, choice);

    db.ref(
        `rooms/${roomCode}/${playerName}`
    ).set({

        choice: choice
    });
}

/* ================= LISTEN ROOM ================= */

function listenRoom() {

    db.ref(`rooms/${roomCode}`).on("value", (snapshot) => {

        const data = snapshot.val();

        console.log("DATA FIREBASE:", data);

        if (!data) {
            hasil.innerHTML = "Menunggu pemain...";
            return;
        }

        const players = Object.keys(data);
        console.log("PLAYERS:", players);
        console.log("JUMLAH PLAYER:", players.length);

        if (players.length < 2) {
            hasil.innerHTML = "Menunggu lawan...";
            return;
        }

        const p1 = players[0];
        const p2 = players[1];

        const c1 = data[p1].choice;
        const c2 = data[p2].choice;

        console.log("P1:", p1, c1);
        console.log("P2:", p2, c2);

        if (!c1 || !c2) {
            hasil.innerHTML = "Menunggu pilihan...";
            return;
        }

        // ================= NORMALISASI =================

        function normalize(choice) {

            if (choice.includes("Batu")) {
                return "Batu";
            }

            if (choice.includes("Gunting")) {
                return "Gunting";
            }

            if (choice.includes("Kertas")) {
                return "Kertas";
            }

            return "";
        }

        const a = normalize(c1);
        const b = normalize(c2);

        console.log("NORMAL:", a, b);

        // ================= CEK VALID =================

        if (a === "" || b === "") {

            hasil.innerHTML = `
                <h2>Gesture Tidak Valid</h2>
                <p>${p1}: ${c1}</p>
                <p>${p2}: ${c2}</p>
            `;

            return;
        }

        // ================= TENTUKAN PEMENANG =================

        let winner = "";

        if (a === b) {

            winner = "SERI";

        } else if (

            (a === "Batu" && b === "Gunting") ||
            (a === "Gunting" && b === "Kertas") ||
            (a === "Kertas" && b === "Batu")

        ) {

            winner = p1 + " MENANG";

        } else {

            winner = p2 + " MENANG";
        }

        // ================= TAMPILKAN =================

        hasil.innerHTML = `
            <h2>HASIL PERTANDINGAN</h2>

            <p>${p1}: ${c1}</p>

            <p>${p2}: ${c2}</p>

            <h1>${winner}</h1>
        `;
    });
}

/* ================= CAMERA ================= */

let hands;
let camera;

async function startCamera() {

    try {

        const stream =
            await navigator.mediaDevices
            .getUserMedia({

                video: true
            });

        video.srcObject = stream;

        await video.play();

        statusText.innerText =
            "Kamera aktif";

        initAI();

    } catch (err) {

        console.log(err);

        statusText.innerText =
            "Kamera gagal";
    }
}

/* ================= AI ================= */

function initAI() {

    hands = new Hands({

        locateFile: (file) => {

            return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        }
    });

    hands.setOptions({

        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.7
    });

    hands.onResults(onResults);

    camera = new Camera(video, {

        onFrame: async () => {

            await hands.send({

                image: video
            });
        },

        width: 640,
        height: 480
    });

    camera.start();
}

/* ================= DETECT ================= */

function detectGesture(landmarks) {

    const index = landmarks[8];
    const middle = landmarks[12];
    const ring = landmarks[16];
    const pinky = landmarks[20];

    let fingers = 0;

    if (index.y < landmarks[6].y)
        fingers++;

    if (middle.y < landmarks[10].y)
        fingers++;

    if (ring.y < landmarks[14].y)
        fingers++;

    if (pinky.y < landmarks[18].y)
        fingers++;

    if (fingers === 0) {

        return "✊ Batu";
    }

    if (

        index.y < landmarks[6].y &&
        middle.y < landmarks[10].y &&
        ring.y > landmarks[14].y &&
        pinky.y > landmarks[18].y

    ) {

        return "✌️ Gunting";
    }

    if (fingers >= 4) {

        return "🤚 Kertas";
    }

    return "";
}

/* ================= AI RESULT ================= */

function onResults(results) {

    if (

        results.multiHandLandmarks &&
        results.multiHandLandmarks.length > 0

    ) {

        const landmarks =
            results.multiHandLandmarks[0];

        const gesture =
            detectGesture(landmarks);

        if (

            gesture !== "" &&
            gesture !== currentChoice

        ) {

            currentChoice = gesture;

            gestureText.innerText =
                "Gesture: " + gesture;

            sendChoice(gesture);
        }
    }
}

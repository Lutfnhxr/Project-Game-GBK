# Project-Game-GBK

## Deskripsi Project

GAME GBK (Gunting Batu Kertas) merupakan aplikasi permainan multiplayer berbasis web dan Android yang dibuat menggunakan teknologi HTML, CSS, JavaScript, Firebase Realtime Database, MediaPipe Hands AI, dan Capacitor Android.

Project ini dibuat untuk memenuhi tugas mata kuliah serta implementasi teknologi Artificial Intelligence (AI) pada pendeteksian gesture tangan secara real-time menggunakan kamera perangkat.

---

# Fitur Utama

- Multiplayer Online Realtime
- Login Nama dan Room
- Deteksi Gesture Tangan dengan AI
- Sistem Batu Gunting Kertas Otomatis
- Firebase Realtime Database
- Support Android Application
- Support Live Server
- Manual Gesture Button
- Tampilan Responsive UI

---

# Teknologi Yang Digunakan

| Teknologi | Fungsi |
|---|---|
| HTML | Struktur halaman |
| CSS | Desain tampilan |
| JavaScript | Logic game |
| Firebase | Database realtime multiplayer |
| MediaPipe Hands | Deteksi gesture tangan |
| Capacitor | Konversi web ke Android |
| Android Studio | Build APK Android |

---

# Struktur Folder

```bash
Project-Game-GBK/
│
├── www/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── android/
├── package.json
├── package-lock.json
├── capacitor.config.json
└── README.md

# GAME GBK KELOMPOK 7 - 2BTT

## Deskripsi Project

GAME GBK (Gunting Batu Kertas) merupakan aplikasi permainan multiplayer berbasis web dan Android yang dibuat menggunakan teknologi HTML, CSS, JavaScript, Firebase Realtime Database, MediaPipe Hands AI, dan Capacitor Android.

Project ini dibuat untuk memenuhi tugas mata kuliah serta implementasi teknologi Artificial Intelligence (AI) pada pendeteksian gesture tangan secara real-time menggunakan kamera perangkat.

---

# Fitur Utama

- Multiplayer Online Realtime
- Login Nama dan Room
- Deteksi Gesture Tangan dengan AI
- Sistem Batu Gunting Kertas Otomatis
- Firebase Realtime Database
- Support Android Application
- Support Live Server
- Manual Gesture Button
- Tampilan Responsive UI

---

# Teknologi Yang Digunakan

| Teknologi | Fungsi |
|---|---|
| HTML | Struktur halaman |
| CSS | Desain tampilan |
| JavaScript | Logic game |
| Firebase | Database realtime multiplayer |
| MediaPipe Hands | Deteksi gesture tangan |
| Capacitor | Konversi web ke Android |
| Android Studio | Build APK Android |

---

# Struktur Folder

```bash
Project-Game-GBK/
│
├── www/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── android/
├── package.json
├── package-lock.json
├── capacitor.config.json
└── README.md


Berikut isi `README.md` yang profesional, rapi, dan cocok untuk project GitHub GAME GBK Anda.

Salin seluruh isi di bawah ini ke file:

```text id="jlwm0f"
README.md
```

---

````md id="5h48pj"
# GAME GBK KELOMPOK 7 - 2BTT

## Deskripsi Project

GAME GBK (Gunting Batu Kertas) merupakan aplikasi permainan multiplayer berbasis web dan Android yang dibuat menggunakan teknologi HTML, CSS, JavaScript, Firebase Realtime Database, MediaPipe Hands AI, dan Capacitor Android.

Project ini dibuat untuk memenuhi tugas mata kuliah serta implementasi teknologi Artificial Intelligence (AI) pada pendeteksian gesture tangan secara real-time menggunakan kamera perangkat.

---

# Fitur Utama

- Multiplayer Online Realtime
- Login Nama dan Room
- Deteksi Gesture Tangan dengan AI
- Sistem Batu Gunting Kertas Otomatis
- Firebase Realtime Database
- Support Android Application
- Support Live Server
- Manual Gesture Button
- Tampilan Responsive UI

---

# Teknologi Yang Digunakan

| Teknologi | Fungsi |
|---|---|
| HTML | Struktur halaman |
| CSS | Desain tampilan |
| JavaScript | Logic game |
| Firebase | Database realtime multiplayer |
| MediaPipe Hands | Deteksi gesture tangan |
| Capacitor | Konversi web ke Android |
| Android Studio | Build APK Android |

---

# Struktur Folder

```bash
Project-Game-GBK/
│
├── www/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── android/
├── package.json
├── package-lock.json
├── capacitor.config.json
└── README.md
````

---

# Cara Menjalankan Project Dengan Live Server

## 1. Install Node.js

Download Node.js:

[https://nodejs.org](https://nodejs.org)

Pastikan Node.js dan npm sudah terinstall:

```bash
node -v
npm -v
```

---

## 2. Install Live Server

Buka CMD pada folder project:

```bash
npm install -g live-server
```

---

## 3. Jalankan Live Server

Masuk ke folder project:

```bash
cd D:\Github
```

Lalu jalankan:

```bash
live-server www
```

Browser akan terbuka otomatis.

---

# Cara Menjalankan Multiplayer

## Player 1

* Masukkan nama player
* Masukkan kode room
* Klik Masuk Game

Contoh:

Nama:

```text
Luthfan
```

Room:

```text
1337
```

---

## Player 2

Masukkan room yang sama:

```text
1337
```

Maka kedua player akan terhubung secara realtime.

---

# Cara Menggunakan AI Gesture

## Gesture Yang Didukung

| Gesture | Hasil   |
| ------- | ------- |
| ✊       | Batu    |
| ✌️      | Gunting |
| 🤚      | Kertas  |

Aplikasi akan mendeteksi gesture otomatis menggunakan kamera.

---

# Konfigurasi Firebase

Project menggunakan Firebase Realtime Database.

Pastikan rules Firebase:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

---

# Cara Convert Menjadi Aplikasi Android

## 1. Install Capacitor

```bash
npm init -y
```

```bash
npm install @capacitor/core @capacitor/cli
```

---

## 2. Inisialisasi Capacitor

```bash
npx cap init
```

Isi:

```text
App Name:
Kelompok7-2BTT

Package ID:
com.kelompok7.gamegbk
```

---

## 3. Install Android Platform

```bash
npm install @capacitor/android
```

---

## 4. Tambahkan Android

```bash
npx cap add android
```

---

## 5. Sinkronisasi Project

```bash
npx cap sync
```

---

## 6. Buka Android Studio

```bash
npx cap open android
```

---

# Cara Build APK Android

## Build APK Debug

Pada Android Studio:

```text
Build
→ Build Bundle(s) / APK(s)
→ Build APK(s)
```

APK akan berada di:

```text
android/app/build/outputs/apk/debug/
```

---

# Cara Install APK Ke Android

1. Aktifkan:

   * Install Unknown Apps
   * Izinkan Browser/File Manager

2. Install APK secara manual.

3. Berikan izin:

   * Kamera
   * Internet

---

# Troubleshooting

## Error Permission Denied Firebase

Pastikan Firebase Rules:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

---

## Kamera Tidak Muncul

Pastikan:

* Browser mendapat izin kamera
* HTTPS aktif
* Kamera perangkat berfungsi

---

## APK Tidak Bisa Diinstall

Penyebab:

* APK corrupt
* Signature berbeda
* Build gagal
* Permission Android ditolak

Solusi:

* Rebuild APK
* Uninstall aplikasi lama
* Build ulang dari Android Studio

---

# Author

Kelompok 7 - 2BTT

Project Mata Kuliah Pemrograman dan Implementasi AI Gesture Detection.

---

# License

Project ini dibuat untuk kebutuhan pembelajaran dan pengembangan akademik.

````

---

Setelah membuat `README.md`, upload ke GitHub:

```bash id="b2zzm4"
git add README.md
git commit -m "Add README"
git push
````

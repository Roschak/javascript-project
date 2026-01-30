// TODO: Ambil modul 'fs' (FileSystem) dan 'path' dari core modules
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Bagian ini penting untuk mendapatkan path absolut di ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * path.resolve membantu kita menentukan lokasi file secara tepat.
 * Di sini kita menggabungkan folder saat ini (__dirname) dengan nama file 'notes.txt'
 */
const notesFilePath = path.resolve(__dirname, 'notes.txt');

// Definisi Callback Function: Apa yang dilakukan setelah file dibaca?
const fileReadCallback = (error, data) => {
    // Jika ada error (misal file tidak ditemukan atau folder salah)
    if (error) {
        console.log('Gagal membaca berkas. Periksa kembali lokasi filenya!');
        return;
    }
    
    // Jika berhasil, tampilkan datanya ke console
    console.log(data);
};

// Menjalankan perintah membaca file secara Asynchronous
// Argumen: Lokasi file, format karakter (UTF-8 agar bisa dibaca manusia), dan callback
fs.readFile(notesFilePath, 'UTF-8', fileReadCallback);
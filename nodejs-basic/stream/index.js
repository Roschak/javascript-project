// TODO: Import modul fs dan path
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup untuk mendapatkan path yang dinamis dan absolut
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Menentukan lokasi file input (yang dibaca) dan output (yang akan dibuat)
const inputPath = path.resolve(__dirname, 'input.txt');
const outputPath = path.resolve(__dirname, 'output.txt');

// TODO 1: Buat readable stream dengan highWaterMark 15 karakter
const readableStream = fs.createReadStream(inputPath, {
    highWaterMark: 15
});

// TODO 2: Buat writable stream untuk menulis ke output.txt
const writableStream = fs.createWriteStream(outputPath);

// Proses membaca data per bagian (chunk)
readableStream.on('readable', () => {
    try {
        const chunk = readableStream.read();
        if (chunk !== null) {
            // TODO: Tulis ulang teks ke writable stream
            // Kita tambahkan '\n' (baris baru) di setiap potongan teks
            writableStream.write(`${chunk}\n`);
        }
    } catch (error) {
        // Menangani error jika proses pembacaan gagal
        console.error('Terjadi kesalahan saat membaca stream:', error.message);
    }
});

// Memberi tanda bahwa proses stream telah berakhir
readableStream.on('end', () => {
    writableStream.end(); // Menutup aliran tulis
    console.log('Proses selesai! Cek file output.txt di folder stream kamu.');
});
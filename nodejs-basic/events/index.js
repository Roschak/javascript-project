// TODO 1: Import EventEmitter dari core module 'events'
// Kita menggunakan destructuring { EventEmitter } karena kita hanya butuh class tersebut
import { EventEmitter } from 'events';

// Fungsi ini adalah 'Listener' (apa yang dilakukan saat kejadian terjadi)
const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

// TODO 2: Buat instance (objek nyata) dari EventEmitter
// Variabel ini yang akan bertugas 'mendengar' dan 'memicu' kejadian
const myEmitter = new EventEmitter();

// TODO 3: Daftarkan Listener ke sebuah Event
// Menggunakan method .on()
// Artinya: "Wahai myEmitter, kalau ada kejadian bernama 'birthday', jalankan fungsi birthdayEventListener ya!"
myEmitter.on('birthday', birthdayEventListener);

// TODO 4: Bangkitkan event 'birthday' menggunakan .emit()
// Kita memicu kejadiannya secara manual dan mengirimkan nama sebagai argumen
myEmitter.emit('birthday', 'Budi'); // Ganti 'Budi' dengan namamu sendiri
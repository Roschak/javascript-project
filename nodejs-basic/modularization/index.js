// IMPORT: Mengambil blueprint dari file lain
// Titik dua (./) artinya mencari file di folder yang sama
import Tiger from './Tiger.js';
import Wolf from './Wolf.js';

// LOGIKA PERTANDINGAN
// Fungsi ini menerima dua objek (hewan) dan membandingkan kekuatannya
const fighting = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    tiger.growl(); // Panggil aksi harimau jika menang
    return 'Harimau memenangkan pertandingan!';
  }

  if (wolf.strength > tiger.strength) {
    wolf.howl(); // Panggil aksi serigala jika menang
    return 'Serigala memenangkan pertandingan!';
  }

  return 'Harimau dan serigala sama-sama kuat!';
};

// INSTANSIASI: Membuat objek nyata dari blueprint yang sudah di-import
const tiger = new Tiger();
const wolf = new Wolf();

// MENJALANKAN FUNGSI
const result = fighting(tiger, wolf);

// MENAMPILKAN HASIL
console.log(result);
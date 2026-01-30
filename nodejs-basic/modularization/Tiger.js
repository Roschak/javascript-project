// Definisi Blueprint (Class) untuk objek Tiger
class Tiger {
  constructor() {
    // Memberikan nilai kekuatan acak 0-100 saat objek dibuat
    this.strength = Math.floor(Math.random() * 100);
  }

  // Method/Fungsi aksi yang bisa dilakukan Tiger
  growl() {
    console.log('grrrrr!');
  }
}

// EKSPOR: Agar file lain bisa menggunakan class Tiger ini
export default Tiger;
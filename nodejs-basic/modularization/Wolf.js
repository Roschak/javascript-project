class Wolf {
  constructor() {
    // Kekuatan acak untuk Serigala
    this.strength = Math.floor(Math.random() * 100);
  }

  // Aksi unik milik Serigala
  howl() {
    console.log('aaaaauuuuu!');
  }
}

// EKSPOR: Mengizinkan file lain meng-import class ini
export default Wolf;
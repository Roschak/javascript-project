// TODO: Import module pihak ketiga (third-party module)
// Kita tidak pakai './' karena lodash diambil dari folder node_modules
import _ from 'lodash';

// Menggunakan fungsi .partition dari lodash
// Fungsi ini membagi array jadi dua: satu yang memenuhi syarat (ganjil), satu yang tidak (genap)
const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);

// Menampilkan hasil array yang sudah terbagi
console.log(myOddEvenArray);
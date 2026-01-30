// TODO 1: Isi dengan nilai heapUsed dari instance process.memoryUsage.
const initialMemoryUsage = process.memoryUsage().heapUsed;

// TODO 2: Isi dengan nilai index ke-2 dari process.argv.
const yourName = process.argv[2];

// TODO 3: Isi dengan nilai NODE_ENV dari process.env.
const environment = process.env.NODE_ENV;

for(let i = 0; i <= 10000; i++) {
    // Proses looping ini akan membuat penggunaan memori naik
}

// TODO 4: Isi dengan nilai heapUsed dari instance process.memoryUsage.
const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
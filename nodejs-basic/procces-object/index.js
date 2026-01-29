// TODO 1: Get initial memory usage (rss is Resident Set Size)
const initialMemoryUsage = process.memoryUsage().heapUsed;

// TODO 2: Your name
const yourName = "roschak";

// TODO 3: The environment (e.g., development or production)
const environment = process.env.NODE_ENV || 'development';

for(let i = 0; i <= 10000; i++) {
    // This loop executes quickly, but it mimics a workload
}

// TODO 4: Get memory usage after the loop
const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
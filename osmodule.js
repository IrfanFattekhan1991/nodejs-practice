const os = require("os");

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log("total memory:" + totalMemory);
console.log(`Free memory :${freeMemory}`);

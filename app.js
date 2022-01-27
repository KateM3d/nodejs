// Path module
const path = require("path");

console.log(path.sep); // returns platform specific separator

const filePath = path.join("./content/", "subfolder", "test.txt");
console.log(filePath);
// outcome: content\subfolder\test.txt

const base = path.basename(filePath);
console.log(base);
// outcome: test.txt

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
// returns absolute path
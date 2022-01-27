const { readFileSync, writeFileSync } = require("fs");

// readFileSync -method for reading text files. takes 2 arguments path and format
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// writeFileSync -method for creating text files. takes 2 parameters path and inner. if the file is already excists node will overrite it with the new value

writeFileSync(
    "./content/result-sync.txt",
    `Here is the result ${first}, ${second} and here you are`, { flag: "a" }
);
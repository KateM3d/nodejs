// Globals -no window

// __dirname -path to current directory
// __filename - filename
//  require - function to use modules (CommonJS)
// process -infoabout env where the program is being executed

console.log(__dirname);
const hello = setInterval(() => {
    console.log("hi there");
}, 3000);
hello();
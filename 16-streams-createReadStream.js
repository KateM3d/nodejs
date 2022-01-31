const { createReadStream } = require("fs");
const stream = createReadStream("./content/big.txt"); //file that we want to read

stream.on("data", (result) => {
    console.log(result);
});
stream.on("error", (err) => {
    console.log(err);
});
// instead of reading everything we are reading in chunks

// by default the size of the buffer is 64kb
// highWaterMark-controls the size of the buffer
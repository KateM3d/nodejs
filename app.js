const { readFile, writeFile } = require("fs");

// for async method we need to provide a callback

readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return null;
    }
    const first = result;
    readFile("./content/second.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return null;
        }
        const second = result;
        writeFile(
            "./content/result-async.txt",
            `here is the result: ${first} and ${second}`, { flag: "a" },
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        );
    });
});
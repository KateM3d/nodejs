const http = require("http");

const server = http.createServer((req, res) => {
    console.log("request event");
    res.end("Hello World");
});

server.listen(5000, () => {
    console.log("Server listening on port : 5000....");
});

// event loop is just waiting for requsts to come in. once it came in it will show in the comand prompt
// HTTP built in module. will allow to set up a server
const http = require("http");

//method createServer is looking for a callback with 2 parameters: req, res. req represents the client request and res is what we are sending back
// we also need to say what port server is going to be listening to with the method listen().
const server = http.createServer((req, res) => {
    //   console.log(req);
    //   res.write("Welcome to our home page"); //write() method
    //   res.end(); //end() method to end the request

    if (req.url === "/") {
        res.end("Welcome to our home page");
    } else if (req.url === "/about") {
        res.end("here is our short history");
    } else {
        res.end(`
    <h1>Oops!</h1>
    <p>we can't find a page you are looking for</p>
    <a href="/">back home</a>
    `);
    }
});

server.listen(5000);
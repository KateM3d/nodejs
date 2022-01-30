// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on("response", (name, id) => {
    console.log(`data recieved user ${name} with id:${id}`);
});

customEmitter.on("response", () => {
    console.log("some other logic here");
});

customEmitter.emit("response", "john", 34);

// we can have as many methods as we want that will be listening to the same event with different logic
// the order matters, we first listen for an event and then emit it.
// we can pass the arguments when we are emitting
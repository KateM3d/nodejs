// Modules
// CommonJS, every file is a module (by default)
// modules - encapsulated code( only share minimum)
const names = require("./4-first_module");
// const { john, peter } = require("./4-first_module");
const sayHi = require("./5-second_module");
// console.log(names);
const data = require("./6-alternative-flavor");
// console.log(data);
require("./7-mind-grenade");

// sayHi("Susan");
// // sayHi(john);
// // sayHi(peter);
// sayHi(names.john);
// sayHi(names.peter);
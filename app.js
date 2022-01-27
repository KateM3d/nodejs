// npm - global ommand, comes with node
// npm --version

// local dependency -use it only in this particular project
// npm i <packageName>

// global dependency - use it iin any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file stores importante info about the project
// manual approach
// npm init (step by step)
// npm init -y(everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
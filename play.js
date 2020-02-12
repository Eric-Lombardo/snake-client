// uses object destucturing to only take the connect
// key which is a function within the client.js
// export object.

const { connect } = require("./client");
const { setupInput } = require("./input")

// executing connect function from client.js
// connect(); // commented this out because we are passing the return value (object) of this into setupInput 
console.log("connecting ....");

// excuting setupInput function from input.js
setupInput(connect());


// uses object destucturing to only take the connect
// key which is a function within the client.js
// export object.

const { connect } = require("./client");

// executing connect function from client.js
console.log("connecting ....");
connect();
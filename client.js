// connect function that was initially made in play.js
// but is here now for refactoring purposes

const net = require("net");
const { IP, PORT } = require("./constants")

// establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // for data handler
  conn.on("data", data => {
    console.log(data);
  })

  // for connection handler
  // write initials to the server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: EJL")
  })

  return conn;
};

module.exports = { connect };
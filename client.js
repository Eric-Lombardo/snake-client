// connect function that was initially made in play.js
// but is here now for refactoring purposes

const net = require("net");

// establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "192.168.0.103",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // to handle data
  conn.on("data", data => {
    console.log(data);
  })

  return conn;
};

module.exports.connect = connect;
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

  // move down
  // conn.on("connect", () => {
  //   // experiments with automatcially moving down on connect
  //   // let x = 20
  //   // for (let i = 0; i < 20; i++) {
  //   //   x += 20
  //   //   setTimeout(() => {
  //   //     conn.write("Move: down");
  //   //   }, x)
  //   // }
  // })


  return conn;
};

module.exports = { connect };
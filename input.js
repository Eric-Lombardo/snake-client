// stores the active TCP connection object
// its in the global for now as undefined because our
// setupInput takes in conn which is an object that we got from connect()
// and then we reassign connection to equal that conn object
let connection;



// setup user interface so that we can handle user input via stdin
const setupInput = function(conn) {

  connection = conn

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
}

// will be used as a call back in setupInput to check if the key pressed
// is ctrl+c and if it is to exit out of the program
const handleUserInput = function(key) {

  // ctrl+c
  if (key === "\u0003") {
    process.exit();
  } else if (key === "\u0077") {
    connection.write("Move: up");
  } else if (key === "\u0073") {
    connection.write("Move: down")
  } else if (key === "\u0061") {
    connection.write("Move: left")
  } else if (key === "\u0064") {
    connection.write("Move: right")
  }
};

module.exports = { setupInput };
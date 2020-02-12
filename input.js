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


// hacked version to go faster
const goFast = function(commandStr) {
  let timeDelay = 0;

  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      connection.write(commandStr);
    }, timeDelay)
    timeDelay += 50;
  }
}




// will be used as a call back in setupInput to check if the key pressed
// is ctrl+c and if it is to exit out of the program
const handleUserInput = function(key) {

  // ctrl+c
  if (key === "\u0003") {
    process.exit();
  } // w a s d
    else if (key === "\u0077") {
    goFast("Move: up");
  } else if (key === "\u0073") {
    goFast("Move: down")
  } else if (key === "\u0061") {
    goFast("Move: left")
  } else if (key === "\u0064") {
    goFast("Move: right")
  } // custom message
    else if (key === "\u0020") {
    connection.write("Say: 2fast2furious")
  }
};

module.exports = { setupInput };
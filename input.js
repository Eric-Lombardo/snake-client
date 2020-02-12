// setup user interface so that we can handle user input via stdin
const setupInput = function() {
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
  if (key === "\u0003") {
    process.exit();
  }  
}

module.exports = { setupInput };
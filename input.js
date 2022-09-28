const { controls } = require('./constants');
let connection;

const handleUserInput = key => {
  if (key === '\u0003') {
    process.exit();
  };
  connection.write(controls[key]);
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
};
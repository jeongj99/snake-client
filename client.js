const net = require("net");
const { IP, PORT } = require('./constants');
const initials = (process.argv)[2];

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf-8");

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${initials}`);
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect
};
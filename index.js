//Add a web framework
const express = require("express");
const app = express();

//Add a web server
const http = require('http');
const server = http.Server(app);

//Extend the server with Socket.io
const sockets = require("socket.io");
io = sockets(server);

//Listen for new connections and messages
io.on("connection", function (connection) {
  connection.on("message", function (data) {
    console.log("new message: " + data);
    io.emit("broadcast", data);
  });
});
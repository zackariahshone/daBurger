const express = require('express');
const http = require("http");
const PORT = 8080;
const server = http.createServer(handleRequest);


server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
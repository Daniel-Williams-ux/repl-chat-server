//Add a web framework
const express = require("express");
const app = express();

//Add a web server
const http = require('http');
const server = http.Server(app);
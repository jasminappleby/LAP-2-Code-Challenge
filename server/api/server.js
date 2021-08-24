const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => res.send("It is story time"));

const storyRoute = require('./controllers/stories')
server.use('/stories', storyRoute)

module.exports = server;
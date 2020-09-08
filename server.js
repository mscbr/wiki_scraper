const express = require("express");
const http = require("http");
const logger = require("morgan");
const reload = require("reload");

const hostname = "127.0.0.1";
const port = 8000;

const { getNames } = require("./hmopScrape");

const app = express();
app.set("port", port);
app.use(express.json()); // body parser;
app.use(logger, "dev");

const server = http.createServer((req, res) => {
  // getNames().then(names => console.log(names));
  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("Hi There!\n");
  res.end("END OF EXECUTION\n");
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

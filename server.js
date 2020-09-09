const express = require("express");
const http = require("http");
const morgan = require("morgan");

const hostname = "127.0.0.1";
const port = 8000;

const { getNames } = require("./hmopScrape");

const app = express();
app.set("port", port);
app.use(express.json()); // body parser;
app.use(morgan("method :url :status :res[content-length] - :response-time ms"));

const server = http.createServer(app);

app.get("/", (req, res) => {
  getNames().then((template) => {
    console.log(typeof template);
    const output = Object.values(template).join("<br />");
    res.send(output);
  });
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

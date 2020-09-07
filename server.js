let http = require("http");

const handleRequest = (req, resp) => {
  resp.writeHead(200, {
    "Content-Type": "text/plain",
  });
  resp.write("<div />");
  resp.end();
};

http.createServer(handleRequest).listen(8000);

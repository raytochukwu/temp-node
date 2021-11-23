const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }

  if (req.url === "/about") {
    res.end("Welcome to our About page");
  }
  res.end(`<h1>Ooops!</h1> <p>cant find the page</p><a href='/'>home</a>`);
});

server.listen(5000);

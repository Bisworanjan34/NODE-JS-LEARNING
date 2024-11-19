let http = require("http");
let port = 3030;
let server = http.createServer((req, res) => {
  res.end("first response");
});

server.listen(port, () => {
  console.log("server started");
});

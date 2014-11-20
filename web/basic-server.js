var http = require("http");
var URL = require("url");
var path = require("path");

var handler = require("./request-handler");
var archiveHelpers = require("../helpers/archive-helpers")

var router = archiveHelpers.paths;

var port = 8080;
var ip = "127.0.0.1";

var server = http.createServer(function(req, res) {
  var url = URL.parse(req.url).pathname;

  if (router[url]) {
    handler.handleRequest(req, res, router[url]);
  }
  else {
    res.writeHead(404);
    res.end();
  }
});

console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);


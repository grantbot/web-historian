var path = require('path');
var fs = require("fs");
var URL = require("url");
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');

// handlRequest will have to pass in direct filePaths to
// serveAssets function

exports.handleRequest = function (req, res, filePath) {
  console.log("SERVING ", req.url)

  console.log("handleRequest Called");

  if (req.method === "GET") {
    console.log("GET REQUEST RECEIVED")
    httpHelpers.serveAssets(res, filePath);
  }
  if (req.method === "POST") {
    console.log("POST REQUEST RECEIVED");
    req.on("data", function(data) {
      var url = data.toString().split("=")[1];
      // console.log(url);
      var stuff = archive.readListOfUrls()
      console.log("onpost: " + stuff);
    })
  }


  //Extract user input --> archiveUrl

  //If POST request
    //If archiveUrl is in our list
      //If archiveUrl has already been archived
        //Serve archived version from server

      //Else, serve loading screen

    //Else, archiveUrl has never been seen
      //So we add it to our list
      //Serve loading screen

};

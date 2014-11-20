var path = require('path');
var fs = require("fs");
var URL = require("url");
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');

var paths = archive.paths;

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

      archive.isUrlInList(paths.archivedSitesList, url, function(isInArchiveList) {
        console.log("Is in list?: " + isInArchiveList);
        // if (isInArchiveList) {
        //   //Serve up archived version
        // } else {

        // }
      });

    })
  }


  //Extract user input --> archiveUrl

  //If POST request
    //If archiveUrl is in our list
      //If archiveUrl has already been archived
        //Serve archived version from server

      //Else, serve loading screen

    //Else, archiveUrl has never been seen
      //Serve loading screen
      //So we add it to our fetchList with a \n

};

var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpRequest = require("http-request");
var paths = archive.paths;

exports.fetchHtml = fetchHtml = function(url) {
  urlWithHttp = "http://" + url;

  httpRequest.get(urlWithHttp, function (err, res) {
    if (err) {
      console.log("ERROR", urlWithHttp);
      return;
    }
    archive.downloadHtml(paths.archivedSitesHtml, url, res.buffer);
    archive.addUrlToList(paths.archivedSitesList, url);
  });
};

exports.textFileToArray = textFileToArray = function(file) {
  archive.readListOfUrls(file, function(data) {
    var results = data.split('\n');

    for (var i = 0; i < results.length; i++) {
      fetchHtml(results[i]);
    }

    fs.truncate(paths.fetchList, 0, function(err) {
      if (err) {
        throw err
      }
      console.log("FETCH LIST EMPTIED");

    })
  });
}
// Read the fetch list, and split into array
// loop through array and call fetchHtml
// empty fetch list

textFileToArray(paths.fetchList);

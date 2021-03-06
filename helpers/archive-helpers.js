var fs = require('fs');
var path = require('path');
var _ = require('underscore');

exports.paths = paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSitesHtml' : path.join(__dirname, '../archives/sites'),
  'archivedSitesList' : path.join(__dirname, '../archives/sites.txt'),
  'fetchList': path.join(__dirname, '../archives/fetchList.txt'),
  '/': path.join(__dirname, "../web/public/index.html"),
  'loading': path.join(__dirname, "../web/public/loading.html")
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};


// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = readListOfUrls = function(list, callback){
  // Read sites.txt and return it in a useful format
  fs.readFile(list, "utf8", function(err, data) {
    if (err) {
      throw err;
    }
    else {
      return callback(data);
    }
  });

};

exports.isUrlInList = isUrlInList = function(list, url, callback){
  return readListOfUrls(list, function(data) {
    return callback(data.indexOf(url) !== -1);
  })
};

exports.getArchivedHtmlPath = getArchivedHtmlPath = function(url, callback) {
  var archivePath = paths.archivedSitesHtml + "/" + url + ".html";
  return archivePath;
}

exports.addUrlToList = addUrlToList = function(list, url){
  // push an input url into the url list
  var appendingString = url + "\n";
  console.log("APPENDER CONSIDERING URL", appendingString);

  var appender = function(present){
    if (!present){
      fs.appendFile(list, appendingString, function(err) {
        if (err) {
          throw err;
        }
        else {
          console.log("SUCCESSFULLY APPENDED TO " + list);
        }
      })
    }else console.log('fuck off ITS IN THERE ARREDY');
  }

  isUrlInList(list, appendingString, appender);
};

exports.downloadHtml = downloadHtml = function(path, url, buffer) {
  console.log("IN DOWNLOAD");

  fs.writeFile(path + "/" + url + ".html", buffer.toString(), function(err) {
    if (err) {
      throw err;
      return;
    }
    console.log("HTML ARCHIVED");
  });
}


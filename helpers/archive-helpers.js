var fs = require('fs');
var path = require('path');
var _ = require('underscore');

exports.paths = paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt'),
  '/': path.join(__dirname, "../web/public/index.html")
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};


// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(){
  // Read sites.txt and return it in a useful format
  var result;

  fs.readFile(paths.list, "utf8", function(err, data) {
    if (err) {
      throw err;
    }
    else {
      result = data;
    }
  });

  return result;
};

exports.isUrlInList = function(){
  // return true if input url is in the list of urls (indexOf?)
};

exports.addUrlToList = function(){
  // push an input url into the url list
};




exports.isURLArchived = function(){
  // return true if input url is in the archive list
};

exports.downloadUrls = function(){
  //
};

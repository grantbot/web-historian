// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.

//Perhaps easier, the request handler only writes to an intermediate fetch list,
//which this function reads from and clears on every interval. Then this
//function is the only one that writes to our master archive list.

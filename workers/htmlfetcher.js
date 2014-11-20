// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.

//Basically, this will have to check our master list of sites and pull out
//any of those sites that haven't been archived yet, and then archive those

//Perhaps easier, the request handler only writes to an intermediate fetch list,
//which this function reads from and clears on every interval. Then this
//function is the only one that writes to our master archive list.

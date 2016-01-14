#!/usr/bin/env /usr/local/bin/node

//https://en.wikipedia.org/w/api.php?action=query&list=random&format=json&rnnamespace=4&rnlimit=5

/*
 * author: Barış Güler - https://github.com/hwclass
 * screenshot: http://i.imgur.com/BxKV8jU.png
 * desc: get random titles everyday from Wikipedia
 */

var http = require('http');

var requstParameters = {
	headers : {
		'Accept': '*/*',
		'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
	},
	method : 'GET',
	hostname : 'en.wikipedia.org',
	path: '/w/api.php?format=json&action=query&generator=random&grnnamespace=0&grnlimit=5'
}

/*
var request = https.request(requstParameters, function (res) {
	res.on('data', function (data) {
		console.dir(data);
	})
});
*/

/*
https.get(requstParameters, function(res) {
	console.log(111);
	res.on('data', function(data) {
		body += data;
	});
});
*/

http.request(requstParameters, function (response) {
	response.on('data', function (data) {
		console.dir(response);
	})
});

request.end();

request.on('error', function (err) {
	console.log('Error : ' + err);
});


#!/usr/bin/env /usr/local/bin/node

/*
 * author:
 *     Barış Güler - https://github.com/hwclass
 * screenshot:
 *     http://i.imgur.com/BxKV8jU.png
 * desc:
 *     list your Twitter timeline
 */

//twit = require('twit');

var https = require('https');

var ENV = {
	TWITTER_KEY : 'r9XnjvzCSiaOXuQvhoAaj1sN3',
	TWITTER_SECRET : '3bIkumx23ZG1iutvpUV7youKAZ0KfOcPfdMxblQBRLztyy5b6s',
	token : {
		accessToken : '1055147588-H47gvi8ksLCleR1s6eyQGUQZ0FcFuTnIUuzSeay',
		tokenSecret : 'pJRvLhKlpe061cNNuNtHjeRwvWlq5cWzWhHXVJtI7Ofol'
	}
};

/*
var twitter = new twit({
	consumer_key: ENV.TWITTER_KEY,
  	consumer_secret: ENV.TWITTER_SECRET,
  	access_token: ENV.token.accessToken,
  	access_token_secret: ENV.token.tokenSecret
});
*/

/*
Authorization: OAuth 
oauth_consumer_key="r9XnjvzCSiaOXuQvhoAaj1sN3", 
oauth_nonce="2fd949de5311552133fea807dc59b86c", 
oauth_signature="ZobyYA0lUI41HOyFp5xBU5myrp8%3D", 
oauth_signature_method="HMAC-SHA1", 
oauth_timestamp="1452441019", 
oauth_token="1055147588-H47gvi8ksLCleR1s6eyQGUQZ0FcFuTnIUuzSeay", 
oauth_version="1.0"
*/

var requstParameters = {
	headers : {
		"Authorization" : 'OAuth',
		"Accept": '*/*',
		"Connection": "close",
		"User-Agent": "OAuth gem v0.4.4",
		"Content-Type": "application/x-www-form-urlencoded"
	},
	authorization : {
		"OAuth" : {
			oauth_consumer_key : escape('r9XnjvzCSiaOXuQvhoAaj1sN3'),
			oauth_nonce : escape('2fd949de5311552133fea807dc59b86c'),
			oauth_signature : escape('95qJmr7U25aBSsp7nIfJrD09K88='),
			oauth_signature_method : unescape('HMAC-SHA1'),
			oauth_timestamp : Date.now(),
			oauth_token : escape('1055147588-H47gvi8ksLCleR1s6eyQGUQZ0FcFuTnIUuzSeay'),
			oauth_version : '1.0'
		}
	},
	method : 'GET',
	hostname : 'api.twitter.com',
	path: '/1.1/statuses/home_timeline.json?include_entities=true',
	consumer_key: ENV.TWITTER_KEY,
  	consumer_secret: ENV.TWITTER_SECRET,
  	access_token: ENV.token.accessToken,
  	access_token_secret: ENV.token.tokenSecret,
  	include_entities : 'true'
},
	currentRequest = null;

headers = {
	'Content-Type': 'application/x-www-form-urlencoded',
}

function getTweets() {
	var results = null;
	console.log(111);
	try {
		console.log(222);
		console.dir(requstParameters);
		currentRequest = https.request(requstParameters, function (res) {
			res.on('data', function(data) {
				console.log('data ' + data);	
				results = data;
			});
		});
		currentRequest.end();
	} catch (err) {
		console.log(444);
		console.log(err);
	}
	currentRequest.on('error', function (err) {
		console.dir('err : ' + err);
	});
	return results;
};

function setOutput (tweet) {
	try {
		console.log(story['title'] + " | color=#337ab7 | href=" + tweet['url']);
		console.log('---');
	} catch (err) {
		console.log(err);
	}
};

var tweets = getTweets();

console.log(tweets);

/*
.map(function (tweet, ind) {
	setOutput(tweet);
});
*/
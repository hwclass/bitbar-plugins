#!/usr/bin/env /usr/local/bin/node

/*
 * author:
 *     Barış Güler - https://github.com/hwclass
 * screenshot:
 *     http://i.imgur.com/BxKV8jU.png
 * desc:
 *     list your Twitter timeline
 */

twit = require('twit');

var ENV = {
	TWITTER_KEY : 'r9XnjvzCSiaOXuQvhoAaj1sN3',
	TWITTER_SECRET : '3bIkumx23ZG1iutvpUV7youKAZ0KfOcPfdMxblQBRLztyy5b6s',
	token : {
		accessToken : '1055147588-H47gvi8ksLCleR1s6eyQGUQZ0FcFuTnIUuzSeay',
		tokenSecret : 'pJRvLhKlpe061cNNuNtHjeRwvWlq5cWzWhHXVJtI7Ofol'
	}
};

var twitter = new twit({
	consumer_key: ENV.TWITTER_KEY,
  consumer_secret: ENV.TWITTER_SECRET,
  access_token: ENV.token.accessToken,
  access_token_secret: ENV.token.tokenSecret
});

function getTweets() {
	var results = null;
	try {
		twitter.get('search/tweets', { q: 'nodejs since:2013-01-01', geocode: '40.71448,-74.00598,5mi', count: 10 }, function (err, reply) {
			if (err) {
				return err;
			} else {
				results = reply.statuses;
			}
		});
	} catch (err) {
		console.log(err);
	}
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

getTweets().map(function (tweet, ind) {
	setOutput(tweet);
});
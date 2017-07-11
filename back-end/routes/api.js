const express = require('express');
const router = express.Router();
const request = require('request');

//get a list of meetup events
router.get('/events', function(req, res, next){
    request('https://api.meetup.com/2/events?member_id=203258650&offset=0&format=json&limited_events=False&photo-host=public&page=20&fields=&order=time&desc=false&status=upcoming&sig_id=203258650&sig=fae016a4c1fe7bc1a64a269b54d1daf3474c8de0', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        //console.log(body);
        res.send(body);
    }
    })
});

//https://api.meetup.com/Orange-County-American-Japanese-Language-and-Friendship/events?photo-host=public&page=2&sig_id=203258650&sig=411f991b03f4b41ff91f89cc0193bef3a9ef5e18
module.exports = router;

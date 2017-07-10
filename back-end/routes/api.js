const express = require('express');
const router = express.Router();
const request = require('request');

//get a list of meetup events
router.get('/events', function(req, res, next){
    request('https://api.meetup.com/Orange-County-American-Japanese-Language-and-Friendship/events?photo-host=public&page=2&sig_id=203258650&sig=411f991b03f4b41ff91f89cc0193bef3a9ef5e18', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        //console.log(body);
        res.send(body);
    }
    })
});

module.exports = router;

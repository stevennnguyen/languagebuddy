const express = require('express');
const router = express.Router();
const request = require('request');
const Resource = require('../models/resource');

//get a list of meetup events
router.get('/events', function(req, res, next){
    request('https://api.meetup.com/2/events?member_id=203258650&offset=0&format=json&limited_events=False&photo-host=public&page=20&fields=&order=time&desc=false&status=upcoming&sig_id=203258650&sig=fae016a4c1fe7bc1a64a269b54d1daf3474c8de0', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        //console.log(body);
        res.send(body);
    }
    })
});

//get a list of resources from the db
router.get('/resources', function(req, res){
    res.send('GET');
});

module.exports = router;

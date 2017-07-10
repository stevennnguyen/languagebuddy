const express = require('express');
const mongosse = require('mongoose');

//set up express app
const app = express();

//connect to mongodb

//serve static files
app.use(express.static('public'));

//initialize routes
app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

//listen for requests
//process.env.port will listen for the environment port if they have one
//if not will just manually set port to 4000
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});
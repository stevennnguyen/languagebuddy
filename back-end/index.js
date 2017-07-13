//better for optimization and represents a data structure that contains information that will never change
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//set up express app
const app = express();

//allow cors
app.use(cors());

//connect to mongodb
mongoose.connect('', {useMongoClient: true});
mongoose.Promise = global.Promise;

//serve up all our static files
app.use(express.static('public'));

app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
    //console.log(err);
});

//listen for requests
//process.env.port will listen for the environment port if they have one
//if not will just manually set port to 4000
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere" //the type of map we want to use, mongodb can use 2d or 2dsphere for index apparently
        // 2dsphere simulates an actual globe, as the world isn't flat
    }
});

//create ninja Schema & model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false
    },
    // add in geo location; uses GeoJson to do this
    geometry: GeoSchema // we could always pop in the GeoSchema data right into here, but it's nice to make things a little modular as to not waste space
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
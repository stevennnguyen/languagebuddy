const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create ninja Schema & model
const ResourceSchema = new Schema({
    language: {
        type: String,
        required: [true, 'Name field is required']
    },
    methods: {
        type: [],
    }
});

const Resource = mongoose.model('resource', ResourceSchema);

module.exports = Resource;
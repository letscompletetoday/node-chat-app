const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;

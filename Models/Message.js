const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    senderName: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: new Date(),
        required: true,
    },
    profileImage: {
        type: String,
    },
    channelId: {
        type: String,
        required: true,
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;

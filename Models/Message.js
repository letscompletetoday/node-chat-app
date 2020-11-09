const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    timeStamp: {
        type: Date,
        default: new Date(),
        required: true,
    },
    userImage: {
        type: String,
    },
    channelId: {
        type: String,
        required: true,
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;

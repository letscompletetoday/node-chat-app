const express = require('express');
const route = express.Router();
const messageController = require('../Controllers/messageController');

route.get('/offline', messageController.sendOfflineMessages);
route.get('/:channelId', messageController.getMessages);
route.get('/', messageController.getAllMessages);
route.post('/', messageController.saveMessage);

module.exports = route;

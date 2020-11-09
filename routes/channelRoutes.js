const e = require('express');
const express = require('express');
const route = express.Router();
const channelController = require('../Controllers/channelController');

route.get('/all', channelController.pullChannels);
route.get('/:channelId', channelController.pullChannel);
route.post('/', channelController.saveChannel);

module.exports = route;

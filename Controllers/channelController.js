const Channels = require('../Models/Channels');
exports.pullChannels = async (req, res) => {
    const channels = await Channels.find();
    res.json(channels);
}

exports.pullChannel = async (req, res) => {
    const channelId = req.params.channelId;
    const channel = await Channels.findOne({channelId});
}

// exports.saveChannel = async (req, res) => {
//     Channels
// }
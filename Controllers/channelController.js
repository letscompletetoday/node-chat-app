const Channels = require('../Models/Channels');
// const { sendOfflineMessages } = require('./messageController');

exports.pullChannels = async (req, res) => {
    const channels = await Channels.find();
    res.json(channels);
}

exports.pullChannel = async (req, res) => {
    const channelId = req.params.channelId;
    const channel = await Channels.findOne({id: channelId});
    if(channel) {
        res.json(channel);
    } else {
        res.sendStatus(401);
    }
}

exports.saveChannel = async (req, res) => {
    try {
        console.log("Saving boss..");
        const channel = req.body.channel;
        console.log(JSON.stringify(channel))
        await new Channels(channel)
            .save();
        res.sendStatus(200);
    } catch (err) {
        res.json(err).sendStatus(400);
    }
}

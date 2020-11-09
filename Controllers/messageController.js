const Message = require('../Models/Message');
const { validateMessage } = require('../Handlers/messageHandler');

exports.getMessages = async (req, res) => {
    const channelId = req.params.channelId;
    if(!channelId) {
        res.statusCode(400);
    }
    const messages = await Message.find({channelId});
    res.json(messages);
}

exports.getAllMessages = async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
}

exports.saveMessage = async (req, res) => {
    try {
        const message = req.body.message;
        if(!validateMessage(message)) { return; }
        await Message.create(message).save();
        res.json(message);
    }
    catch (err) {
        res.sendStatus(400);
    }
}

exports.sendOfflineMessages = (req, res) => {
    res.json([
                {
                    "message": "Hello World!",
                    "timestamp": "1604592053",
                    "senderName": "Naveen",
                    "profileImage": "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
                    "channelId": "ksdmnfgdn"
                },
                {
                    "message": "SecondMessage",
                    "timestamp": "1604592055",
                    "senderName": "Raj",
                    "profileImage": "https://i.picsum.photos/id/866/200/300.jpg?dummy",
                    "channelId": "ksdmnfgdn"
                },
                {
                    "message": "World!",
                    "timestamp": "1604592053",
                    "senderName": "Naveen",
                    "profileImage": "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
                    "channelId": "ksdmnfgdn"
                },
                {
                    "message": "Message",
                    "timestamp": "1604592055",
                    "senderName": "Raj",
                    "profileImage": "https://i.picsum.photos/id/866/200/300.jpg?dummy",
                    "channelId": "ksdmnfgdn"
                },
                {
                    "message": "Hello!",
                    "timestamp": "1604592053",
                    "senderName": "Naveen",
                    "profileImage": "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
                    "channelId": "ksdmnfgdn"
                },
                {
                    "message": "Secge",
                        "timestamp": "1604592055",
                    "senderName": "Raj",
                    "profileImage": "https://i.picsum.photos/id/866/200/300.jpg?dummy",
                    "channelId": "ksdmnfgdn"
                },
            ]);
}

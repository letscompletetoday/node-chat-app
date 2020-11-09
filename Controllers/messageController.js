const Message = require('../Models/Message');

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
        const message = req.body.message
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
                    "user": "Naveen",
                    "userImage": "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
                },
                {
                    "message": "SecondMessage",
                        "timestamp": "1604592055",
                    "user": "Raj",
                    "userImage": "https://i.picsum.photos/id/866/200/300.jpg?dummy"
                },
                {
                    "message": "World!",
                    "timestamp": "1604592053",
                    "user": "Naveen",
                    "userImage": "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
                },
                {
                    "message": "Message",
                        "timestamp": "1604592055",
                    "user": "Raj",
                    "userImage": "https://i.picsum.photos/id/866/200/300.jpg?dummy"
                },
                {
                    "message": "Hello!",
                    "timestamp": "1604592053",
                    "user": "Naveen",
                    "userImage": "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
                },
                {
                    "message": "Secge",
                        "timestamp": "1604592055",
                    "user": "Raj",
                    "userImage": "https://i.picsum.photos/id/866/200/300.jpg?dummy"
                },
            ]);
}

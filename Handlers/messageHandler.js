exports.validateMessage = (messageObj) => {
    const { message, timestamp, senderName, profileImage, channelId } = messageObj;

    if(!message || !senderName || !profileImage || !channelId) {
        console.error('Invalid Message Obj'+ JSON.stringify(messageObj));
        return false;
    }
    return true;
}

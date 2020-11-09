const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const messageRoute = require('./routes/messageRoutes');
const channelRoute = require('./routes/channelRoutes');
const mongoose = require('mongoose');
const Message = require('./Models/Message');
const { validateMessage }= require('./Handlers/messageHandler')

app.use(express.json());
app.use(express.urlencoded({extended: false}))

mongoose.connect("mongodb+srv://letscompletetoday:nov@2020@cluster0.xbcqz.mongodb.net/chat_app_node_development?retryWrites=true&w=majority", {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(() => {
    console.log('DB Connected...');
})
.catch((err) => {
    console.error(`Failed to connect db.. ${err}`);
})

server.listen(process.env.PORT || 8300);

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});


app.use('/getMessages', messageRoute);
app.use('/channels', channelRoute );

io.on('connection', (socket) => {
    console.log("Connected");
    socket.on('message', async (message) => {
        try {
            if(!validateMessage(message)) { return; }
            io.emit('message', message);
            await new Message(message).save();
        }
      catch (err) {
          console.error('Error at socket connection'+err)
      }
    });
});

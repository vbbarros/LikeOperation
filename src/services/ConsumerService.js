const queue = require("./QueueService");
const mongoose = require('mongoose');
const likesModel = require('../models/LikesModel');

const consume = async() => {
    queue.consume("newLikes", callback => {
        const json = JSON.parse(callback.content.toString())
        likesModel.create(json)
        console.log("processing " + callback.content.toString());
    })
}

const connectDb = () => {
    mongoose.connect('mongodb://mongo:27017/likes', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then((connection) => {
        return connection
    }, err => {
        `ERROR: ${JSON.stringify(err.message)}`
    });
}

connectDb()

module.exports = {
    consume
}


const queue = require("../services/queueService");
const mongoose = require('mongoose');
const likesModel = require('../models/LikesModel')

const consume = async() => {
    queue.consume("newLikes", callback => {
        // if(!db){
        //     db = connectDb()
        // }
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

var db = connectDb()

module.exports = {
    consume
}


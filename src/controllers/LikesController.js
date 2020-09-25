const queue = require("../services/QueueService");
const likesModel = require('../models/LikesModel');

const findLikes = async(req, res) => {
    const {idPost} = req.query
    likesModel.find({idPost: idPost}).count((err, count) => {
        res.json({idPost: idPost, count: count})
    })
}

const storeLike = async(req, res) => {
    queue.sendToQueue("newLikes", req.body);
    res.json({message: 'Your request will be processed!'});
}


module.exports = {
    findLikes,
    storeLike
  }
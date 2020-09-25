const queue = require("../services/QueueService");
const likesModel = require('../models/LikesModel');
const { validationResult } = require('express-validator')

const findLikes = async(req, res) => {
    const {idPost} = req.query
    if(!idPost){
        return res.status(400).send({message: "Informe o id do post"})
    }
    likesModel.find({idPost: idPost}).count((err, count) => {
        res.json({idPost: idPost, count: count})
    })
}

const storeLike = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    queue.sendToQueue("newLikes", req.body);
    res.json({message: 'Your request will be processed!'});
}

module.exports = {
    findLikes,
    storeLike
}
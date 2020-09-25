const router = require('express').Router()
const queue = require("../services/queueService");

router.post('/likes', (req, res) => {
    queue.sendToQueue("newLikes", req.body);
    res.json({message: 'Your request will be processed!'});
});

module.exports = router;
const router = require('express').Router()
const queue = require("../services/QueueService");
const likesController = require("../controllers/LikesController")

router.get('/likes', likesController.findLikes)

router.post('/likes', likesController.storeLike)

module.exports = router;
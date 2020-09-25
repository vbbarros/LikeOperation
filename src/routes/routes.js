const router = require('express').Router()
const { body } = require('express-validator')
const likesController = require("../controllers/LikesController")

router.get('/likes', likesController.findLikes)

router.post('/likes', [
    body('idPost').isNumeric(),
    body('idUser').isNumeric()
  ], likesController.storeLike)

module.exports = router;
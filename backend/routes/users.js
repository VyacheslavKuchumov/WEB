const express = require('express')
const router = express.Router()
const { authJwt } = require('../middlewares/auths')

const { getUserByUid, updateLike, getAllUsers } = require('../controllers/users')

router.get('/:uid', [authJwt.verifyToken], getUserByUid)
router.get('/', getAllUsers)
router.put('/likes', [authJwt.verifyToken], updateLike)

module.exports = router
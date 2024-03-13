const express = require('express')
const router = express.Router()
const { authJwt } = require('../middlewares/auth')



const {getUserByUid }= require('../controllers/users')

router.get('/:uid', [authJwt.verifyToken], getUserByUid)

module.exports = router;
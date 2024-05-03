const express = require('express')
const router = express.Router()

const {getRestaurants} = require('../controllers/restaurants')

router.get('/get_restaurants', getRestaurants)

module.exports = router
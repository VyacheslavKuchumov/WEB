const express = require('express')
const router = express.Router()

const {getRestaurants, getMenu} = require('../controllers/restaurants')

router.get('/get_restaurants', getRestaurants)
router.get('/get_menu', getMenu)

module.exports = router
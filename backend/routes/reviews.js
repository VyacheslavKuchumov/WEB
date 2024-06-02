const express = require('express')
const router = express.Router()

const {getReviews} = require('../controllers/reviews')

router.get('/get_reviews', getReviews)

module.exports = router
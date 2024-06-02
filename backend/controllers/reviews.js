const { review } = require('../models/reviews')

const getReviews = async (req, res) => {
    try {
        const reviews = await review.findAll()
        if (!reviews) return res.status(404).send({ message: 'reviews not found' })
        return res.json(reviews)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

module.exports = {
    getReviews
}
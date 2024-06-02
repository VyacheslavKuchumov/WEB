const { restaurant } = require('../models/restaurants')
const { menu } = require('../models/menus')

const getRestaurants = async (req, res) => {
    try {
        const restaurants = await restaurant.findAll()
        if (!restaurants) return res.status(404).send({ message: 'restaurants not found' })
        return res.json(restaurants)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

const getMenu = async (req, res) => {
    try {
        const menus = await menu.findAll()
        if (!menus) return res.status(404).send({ message: 'menu not found' })
        return res.json(menus)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

module.exports = {
    getRestaurants,
    getMenu
}
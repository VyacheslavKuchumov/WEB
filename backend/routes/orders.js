const express = require('express')
const router = express.Router()

const {getOrdersByUser, createOrder, createOrderItem, getOrderItems} = require('../controllers/orders')

router.get('/get_orders/:user_id', getOrdersByUser)
router.get('/get_order_items', getOrderItems)
router.post('/create_order/:user_id', createOrder)
router.post('/create_order_item', createOrderItem)

module.exports = router
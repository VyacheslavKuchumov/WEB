const { order } = require('../models/orders')
const { order_item } = require('../models/order_items')
const { Op} = require('sequelize')

const getOrdersByUser = async (req, res) => {
    try {
        const orders = await order.findAll({ 
            where: { user_id: req.params?.user_id },
            order: [
              ['order_date', 'DESC'] // or 'DESC' for descending order
            ] })
        if (!orders) return res.status(404).send({ message: 'Orders not found' })
        
        return res.json(orders)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

const getOrderItems = async (req, res) => {
    try {
        const orderItems = await order_item.findAll(
            // {where: {order_id: [12, 13]}}
        )
        if (!orderItems) return res.status(404).send({ message: 'Order items not found wtf' })
        
        return res.json(orderItems)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}


const createOrder = async (req, res) => {
    try {
        
        const cur_order = await order.create({
            order_date: new Date(),
            user_id: req.params?.user_id,
        })
        return res.status(201).send({ message: 'order created', order_id: cur_order.id })
    } catch (error) {
        console.log(error.message)
        return res.status(500).send({ message: error.message })
    }
}

const createOrderItem = async (req, res) => {
    try {
        
        const cur_order_item = await order_item.create({
            order_id: req.body.order_id,
            dish_id: req.body.dish_id,
        })
        return res.status(201).send({ message: 'order item created', uid: cur_order_item.id })
    } catch (error) {
        console.log(error.message)
        return res.status(500).send({ message: error.message })
    }
}




module.exports = {
    getOrdersByUser,
    createOrder,
    createOrderItem,
    getOrderItems
}

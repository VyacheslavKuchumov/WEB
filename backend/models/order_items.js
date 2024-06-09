const {sequelize} = require('../connection')
const {DataTypes} = require('sequelize')

const order_item = sequelize.define(
    'order_item',
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        order_id: {
            type: DataTypes.BIGINT,

        },
        dish_id: {
            type: DataTypes.BIGINT,

        },

    },
    {
        tableName: 'order_items',
        timestamps: false
    }
)


module.exports = {order_item}


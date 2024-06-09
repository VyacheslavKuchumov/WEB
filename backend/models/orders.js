const {sequelize} = require('../connection')
const {DataTypes} = require('sequelize')

const order = sequelize.define(
    'order',
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        
        order_date: {
            type: DataTypes.DATE
        },
        user_id: {
            type: DataTypes.BIGINT,

        },

    },
    {
        tableName: 'orders',
        timestamps: false
    }
)


module.exports = {order}


const {sequelize} = require('../connection')
const {DataTypes} = require('sequelize')

const restaurant = sequelize.define(
    'restaurant',
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT
        },
        adress:{
            type: DataTypes.TEXT
        },
        phone:{
            type: DataTypes.TEXT
        },
        company_id: {
            type: DataTypes.BIGINT,

        }

    },
    {
        tableName: 'restaurants',
        timestamps: false
    }
)
async function get_restaurant_table(){
    await auth.sync()
    console.log('Синхрон');
}

module.exports = {restaurant, get_restaurant_table}


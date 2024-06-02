const {sequelize} = require('../connection')
const {DataTypes} = require('sequelize')

const menu = sequelize.define(
    'menu',
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        restaurant_id: {
            type: DataTypes.BIGINT,

        },
        name: {
            type: DataTypes.TEXT
        },
        
        price:{
            type: DataTypes.INTEGER
        }

    },
    {
        tableName: 'restaurant_dishes',
        timestamps: false
    }
)
async function get_menu_table(){
    await auth.sync()
    console.log('Синхрон');
}

module.exports = {menu, get_menu_table}


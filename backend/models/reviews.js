const {sequelize} = require('../connection')
const {DataTypes} = require('sequelize')

const review = sequelize.define(
    'review',
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        
        restaurant_id: {
            type: DataTypes.BIGINT,

        },
        user_id: {
            type: DataTypes.BIGINT,

        },
        review_text:{
            type: DataTypes.TEXT
        },
        review_score:{
            type: DataTypes.INTEGER
        }

    },
    {
        tableName: 'reviews',
        timestamps: false
    }
)
async function get_review_table(){
    await auth.sync()
    console.log('Синхрон');
}

module.exports = {review, get_review_table}


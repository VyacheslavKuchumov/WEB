const { password } = require('pg/lib/defaults');
const { sequelize } = require('../connection')
const { DataTypes } = require('sequelize')

const user = sequelize.define(
    'user',
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT
        },
        likes: {
            type: DataTypes.INTEGER
        },
    },
    {
        tableName: 'users',
        timestamps: true
    })
    user.belongsTo(user, {
        as: 'Uid',
        foreignKey: 'uid'
    })

    async function get_user_table(){
        await auth.sync()
        console.log("in sync")
    }

    module.exports = {user, get_user_table}  
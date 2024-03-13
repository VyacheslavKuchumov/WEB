const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/web_db')

async function connect() {
    try{
        await sequelize.authenticate()
        console.log('db connected')
    } catch (error){
        console.error('bruh: ', error)
    }
}

connect()
module.exports = {sequelize}
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/web_db');

async function connect() {
    try {
        await sequelize.authenticate();
        console.log('SUCCES');
    } catch (error) {
        console.error('NOT SUCCES')
    }
}
connect()
module.exports = { sequelize }
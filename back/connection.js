const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('postgres://postgres:postgre@localhost:5432/db1233');

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('db connected');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connect()

module.exports = { sequelize }
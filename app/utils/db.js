const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL);

sequelize.authenticate()
  .then(() => console.log('Connected to MySQL'))
  .catch(err => console.log('Error: ' + err));

module.exports = sequelize;

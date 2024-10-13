const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('url_shortener', 'postgres', '798546', {
    host: 'db',
    dialect: 'postgres'
});

module.exports = sequelize;
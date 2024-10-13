const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const shortened_url = sequelize.define('shortened_url', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    url_code: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    original_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    modified_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: false, 
    tableName: 'shortened_url'
});

module.exports = shortened_url;
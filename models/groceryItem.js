
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const GroceryItem = sequelize.define('GroceryItem', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = GroceryItem;

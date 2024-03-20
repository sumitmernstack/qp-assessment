
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    
});
const GroceryItem = require('./groceryItem');
Order.belongsToMany(GroceryItem, { through: 'OrderGroceryItems' });

module.exports = Order;


const GroceryItem = require('../models/groceryItem');
const Order = require('../models/order');

exports.viewAvailableItems = async (req, res) => {
    try {
        const availableItems = await GroceryItem.findAll();
        res.json(availableItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.placeOrder = async (req, res) => {
    try {
        const { items } = req.body;
        const totalPrice = items.reduce((total, item) => total + item.price, 0);

        const newOrder = await Order.create({ totalPrice });
        await newOrder.setGroceryItems(items.map(item => item.id));
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const GroceryItem = require('../models/groceryItem');

exports.addGroceryItem = async (req, res) => {
    try {
        const { name, price, quantity } = req.body;
        const newItem = await GroceryItem.create({ name, price, quantity });
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.viewGroceryItems = async (req, res) => {
    try {
        const groceryItems = await GroceryItem.findAll();
        res.json(groceryItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


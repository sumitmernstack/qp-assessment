
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.post('/grocery-items', adminController.addGroceryItem);
router.get('/grocery-items', adminController.viewGroceryItems);

module.exports = router;

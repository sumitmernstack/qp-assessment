
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/available-items', userController.viewAvailableItems);
router.post('/place-order', userController.placeOrder);


module.exports = router;

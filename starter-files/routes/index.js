const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// Do work here -> the callback function that you run after you receive a request to the slash route

router.get('/', storeController.homePage)

router.get('/add', storeController.addStore)

router.get('/', storeController.homePage)

router.get('/', storeController.homePage)

module.exports = router;

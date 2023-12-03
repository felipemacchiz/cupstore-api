const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');

// GET
router.get('/orders', controller.getAll);

router.get('/orders/:id', controller.getById);

// CREATE
router.post('/orders', controller.create);

// UPDATE
router.put('/orders/:id', controller.update);

module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('../controllers/cupcakeController');

// GET
router.get('/cupcakes', controller.getAll);

// router.get('/cupcakes/:id', controller.getById);

router.get('/cupcakes/:key', controller.getByKey);

// CREATE
router.post('/cupcakes', controller.create);

// UPDATE
router.put('/cupcakes/:id', controller.update);

module.exports = router;
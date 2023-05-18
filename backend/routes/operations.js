
const express = require('express');
const operationsController = require('../controllers/operationsController')
const router = express.Router();

// router.get('/operations/:id', operationsController.getOneOperation)

router.get('/operations/:email', operationsController.getAllOperation);

router.post('/operations/:email', operationsController.postAddOperation)

module.exports  = router


const express = require('express');
const operationsController = require('../controllers/operationsController')
const router = express.Router();

router.get('/operations/:id', operationsController.getOneOperation)

router.get('/operations', operationsController.getAllOperation);

router.post('/operations', operationsController.postAddoperaion)


module.exports  = router
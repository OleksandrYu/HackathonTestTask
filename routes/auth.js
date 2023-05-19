
const express = require('express');
const operationsController = require('../controllers/operationsController')
const authController = require('../controllers/authController')
const router = express.Router();

// router.get('/operations/:id', operationsController.getOneOperation)

router.post('/login/', authController.login);

router.post('/register/', authController.registration)

module.exports  = router

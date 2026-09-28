const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userController.js');

router.get('/:id',   userCtrl.get);     

module.exports = router;
const express = require('express')
const router = express.Router();
const Controller = require('./dbQuery/testclass')

router.post('/', Controller.getFormData)

module.exports = router;
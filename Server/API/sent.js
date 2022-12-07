const express = require('express')
const router = express.Router();
const Controller = require('./dbQuery/testclass')

router.get('/:query', Controller.send)

module.exports = router;
const express = require('express')
const router = express.Router();
const Controller = require('./dbQuery/testclass')

router.get('/:query', Controller.recieve)

module.exports = router;
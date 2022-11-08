const express = require('express')
const router = express.Router();
const Controller = require('./testclass')

router.get('/:query', Controller.getData)

module.exports = router;
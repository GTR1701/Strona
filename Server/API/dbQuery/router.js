const express = require('express')
const router = express.Router();
const Controller = require('./testclass')

router.get('/:slug', Controller.getData)
// router.get('/:query', Controller.checkLogin)

module.exports = router;
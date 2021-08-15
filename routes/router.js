const express = require('express')

const searchRoute = require('../helpers/searchRoute')
const controller = require('../controllers/controller')

const router = express.Router()

router.get('/', controller.getIndex)

router.use('/', searchRoute, controller.getPage)

module.exports = router
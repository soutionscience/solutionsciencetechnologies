const express= require('express');
const router = express.Router();
const controller = require('../controllers/home.controller');
const createRouter = require('../utils/createRoute')


createRouter(controller, router);

module.exports = router;

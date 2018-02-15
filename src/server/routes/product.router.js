const express= require('express');
const router = express.Router();
const controller = require('../controllers/product.controller');
const createProdRouter = require('../utils/createProdRoutes')


createProdRouter(controller, router);

module.exports = router;

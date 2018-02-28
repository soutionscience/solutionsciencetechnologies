var express = require('express');
var router = express.Router();
const controller = require('../controllers/user.controller')
/* GET users listing. */
router.route('/')
.post(controller.authenticate);

module.exports = router;
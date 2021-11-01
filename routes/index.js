const express = require('express');
//use express router
const router = express.Router();
console.log("router is loading!!");
const homeController = require('../controllers/home_controller')
router.get('/',homeController.home);


module.exports = router;
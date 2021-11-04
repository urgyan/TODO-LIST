const express = require('express');
//use express router
const router = express.Router();
console.log("router is loading!!");

const homeController = require('../controllers/home_controller');

const addtask = require('../controllers/addtask_controller');
router.get('/',homeController.home);

router.post('/add-todo',addtask.addTask );

module.exports = router;
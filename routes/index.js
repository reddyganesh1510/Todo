const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller')

//renders the home page
router.get('/',homeController.home);

//responds to click on add button
router.post('/new-task',homeController.newTask)

//responds to click on cross <a> tag in tasks
router.get('/delete-task',homeController.deleteTask)

//responds to click on tick <a> tag in tasks
router.get('/completed-task',homeController.completedTask)

//responds to click on back <a> tag in tasks
router.get('/upcoming-task',homeController.upcomingTask)

router.post('/delete-multiple',homeController.deletem);



console.log(`router`)

module.exports = router;

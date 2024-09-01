const express = require('express')
const { getTasks, addTasks, deleteTask, updateTask } = require('../controllers/tasksControllers')
const validateTask = require('../middleware/validateTask')
const router = express.Router()

router.get('/tasks', getTasks)
router.post('/tasks', validateTask ,addTasks)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)

module.exports = router
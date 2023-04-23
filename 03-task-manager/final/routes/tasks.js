const express = require('express')
const router = express.Router()

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask).put(editTask)

module.exports = router


// all the logic for the routes are stored in a file in the conrollers folder, that is the purpose to pevent a clunky code.
// create a api world spce collections rename and start testing n postman

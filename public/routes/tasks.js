const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  deleteTask,
  GetSingleTask,
  updateTask,
} = require("../../controller/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(GetSingleTask).patch(updateTask).delete(deleteTask)

module.exports = router;

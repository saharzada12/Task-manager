const Task = require("../models/tasks");

// fetch all the task
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// create a task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// request a single task
const GetSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `no task with id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// deleting a single task
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `no task with id : ${taskID} was found` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// updating a single task
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body,{
      new:true,
      runValidators:true
    });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `no task with id : ${taskID} was found` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};



// exports
module.exports = {
  getAllTasks,
  GetSingleTask,
  createTask,
  deleteTask,
  updateTask,
  
  
};

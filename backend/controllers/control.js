const Task = require("../models/Task.js")

const createTask =  (req, res) => {
    try {
        console.log("hello");
        const data = req.body;
        const createdTask =  Task.create(data);
        res.json(createdTask);

    } catch (error) {
        console.log(error);
    }
}

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong" });
    }
}
module.exports = {getTasks,createTask}; 
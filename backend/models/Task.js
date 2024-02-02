const mongoose = require ("mongoose");


const taskSchema = new mongoose.Schema({
    title: { type: String , required: true, unique: true},
    body:{ type: String , required: true},
    isDone: { type: Boolean, required:true , default:false}
})

const Task = mongoose.model("task",taskSchema);

module.exports = Task
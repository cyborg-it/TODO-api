const mongoose = require('mongoose');
const todoSchema = require('../schema/todoSchema');
const Todo = new mongoose.model("Todo",todoSchema);

module.exports = Todo



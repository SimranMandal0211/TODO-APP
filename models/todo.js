const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true  //here we can define as much validations
    },
    category: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: true
    }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;




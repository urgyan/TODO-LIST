// import mongoose

const mongoose = require('mongoose');

// create a Schema and field

const ToDoSchema = new mongoose.Schema({

    description:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },
    due_date:{
        type:String,
        required:true
    }


});

// Give name to collection
const TodoList = mongoose.model('TodoList',ToDoSchema);

// export the Collection
module.exports = TodoList;

const TodoList = require('../models/todo_model');

module.exports.addTask = function(req,res){

    console.log(req.body);
    TodoList.create({
        description:req.body.description,
        category:req.body.selectpicker,
        due_date:req.body.due_date
    },function(err,newTodo){

        if(err){
         
            console.log(`this is error of addTask error = ${err}`);
            return;
        }

        console.log('the task is added successfully to database');
        return res.redirect('back');
    });
}

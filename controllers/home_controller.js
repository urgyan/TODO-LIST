const TodoList = require('../models/todo_model')
module.exports.home = function (req,res){
    TodoList.find({},(err,todolist)=>{
        if(err){
            console.log(` this is error from home controller error =${err} `);
            return;
        }
        return res.render('home',{
            title:'ToDo App',
            todo:todolist
            
        });

    });
   
   
}
const Todo = require('../models/todo');


module.exports.home = function(request, respond){
    // return respond.end('<h1>Express is up for TODO!! </h1>');


    Todo.find({}, function(err, todoAPP){   
        if(err){
            console.log('error in fetching todo from db');
            return;
        }
        return respond.render('home',{
            title: "TODO LIST",
            todo_app: todoAPP  
        });
    })
}

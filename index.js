const express = require('express');
const port = 8000;
const path = require('path');

const app = express();

// middleware
app.use(express.urlencoded());
// to add css , js & imgs etc.
app.use(express.static('assets'))


// db
const db = require('./config/mongoose');
const Todo = require('./models/todo');


// use express router
app.use('/', require('./routes'));

//set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname ,'views'));



var todoAPP = [
    {
        description:"DO Homework",
        category: "School",
        dueDate: "02-05-2023"
    },
    {
        description:"make ppt",
        category: "work",
        dueDate: "03-05-2023"
    },
    {
        description:"perchase veges",
        category: "personal",
        dueDate: "04-05-2023"
    }
]


// app.get('/', function(request, respond){


//     Todo.find({}, function(err, todoAPP){   //todos
//         if(err){
//             console.log('error in fetching todo from db');
//             return;
//         }
//         return respond.render('home',{
//             title: "TODO LIST",
//             todo_app: todoAPP   //todos
//         });
//     })


//     // return respond.render('home',{
//     //     title: "TODO LIST",
//     //     todo_app: todoAPP
//     // });
// });


app.post('/create-todo', function(request, respond){
    // todoAPP.push(request.body);
    // return respond.redirect('/');
    // console.log(request.body);

    Todo.create({
        description: request.body.description,
        category: request.body.category,
        dueDate: request.body.dueDate
    }, function(err, newTodo){
        if(err){
            console.log('Error in creating a Contact!');
            return;
        }

        console.log('******', newTodo);
        return respond.redirect('back');
    });
});

app.get('/delete-contact/', function(request, respond){
    // console.log(request.query);
    //         let category = request.query.category;

    //         let todoindex = todoAPP.findIndex(todo => todo.category == category);

    //         if(todoindex != -1){
    //             todoAPP.splice(todoindex, 1);
    //         }

    //         return respond.redirect('back');
   
   
    let id = request.query.id;
    Todo.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in deleting the object');
            return;
        }
        return respond.redirect('back');
    });
});


app.get('/practice', function(request, respond){
    return respond.render('practice', {
        title: "Let us play with ejs"
    });
});


app.listen(port, function(err){
    if(err){
        console.log(`error in returning the server ${err}`);
    }

    console.log(`yup!! my Server is running on port ${port}`);
});
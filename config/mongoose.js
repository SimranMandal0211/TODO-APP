const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/todo_list_db');

// mongoose.connect('mongose://0.0.0.0/todo_list_db');

const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'error connecting to db'));

db.on('error', function(err){
    console.log(err.message)
});

db.once('open', function(){
    console.log('successfully connected to the database');
});
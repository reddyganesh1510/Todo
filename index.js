const express = require('express');
const port =8000;
const app =express();

//makes database and uses it
const db= require('./config/mongoose');
const Task = require('./models/task')



app.use(express.urlencoded());
app.use(express.static('assets'));

//sets view engine and uses the view folder for getting views
app.set('view engine','ejs')
app.set('views','./views')

app.use('/',require('./routes'))




//listens to port and rsponds accordingly
app.listen(port,function(err){
    if(err){
        console.log(`Error ${err}`)

    }
    console.log("Server is ruuning on port:",port)
})
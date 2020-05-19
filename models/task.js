const mongoose =require('mongoose');

//Makes a a schema for database to add Taskname,date,urgency,type and status
const taskSchema = mongoose.Schema({
    task:{
        type : String,
        required : true
    },
    date:{
        type:String,
        required : true
    },

    type:{
        type:String,
        required:true,
    },

    urgency:{
        type:String,
        required:true,
    },

    status:{
        type:String,
        required:true,
    },
    




});


const Task = mongoose.model('Task',taskSchema)

module.exports= Task;
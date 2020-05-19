const db =require('../config/mongoose');
const Task = require('../models/task')

// Renders the home page
module.exports.home=function(req,res){
    Task.find({},function(err,tasks){
        if(err){
            console.log(err);
            return;
        }
        return res.render('todo1',{
            title: "todo",
            TasksList:tasks
        })
    })
};

// Creates a new task and uploads it to database
module.exports.newTask=function(req,res){
    
    Task.create({
        task : req.body.task,
        date:req.body.date,
        type:req.body.type,
        urgency:req.body.urgency,
        status:"upcoming",
    },function(err,newTask){
        if(err){
            console.log(err);
        }
        console.log(newTask);
        return res.redirect('back');

    })

}

// Pushes the task from upcoming table to completed table on pressing the tick icon
module.exports.completedTask= function(req,res){
   Task.findByIdAndUpdate({_id:req.query.id},
    {
        status:"completed"
    },function(err,result){
        if(err){
            console.log(err);
        }
        return res.redirect('back');
    })
       
}

// Pushes the task from completed table to upcoming table on pressing the back icon

module.exports.upcomingTask= function(req,res){
    Task.findByIdAndUpdate({_id:req.query.id},
     {
         status:"upcoming"
     },function(err,result){
         if(err){
             console.log(err);
         }
         return res.redirect('back');
     })
        
 }


 //Deletes the task on pressingt the cross icon
module.exports.deleteTask= function(req,res){
    Task.findByIdAndDelete(req.query.id,function(err){
        
        if(err){
            console.log(err);

        }
        return res.redirect('back');
    })
}

module.exports.deletem =function(req,res){

    if(req.body.check==false)
{
    return;
}        for(i of req.body.check){
            console.log(i)
            Task.findByIdAndDelete(i,function(err){
                if(err){
                    console.log(err)
                    
                }
                return;
            })
        }
    
    return res.redirect('back');
    
}



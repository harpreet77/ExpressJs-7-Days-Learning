exports.getAllTasks =(req,res)=>{
    const tasks=[{id:1,task:'Browsing'},{id:2,task:'writing'}];
    res.json(tasks);
};
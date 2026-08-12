const express = require ("express")
const mongoose = require("mongoose")
const cors= require("cors")
const Task = require("./models/Task")

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/simple-tracker')
.then(()=>{console.log("db connected")}).catch(err=>{console.log(err)});


// get all tasks.
app.get("/tasks",async function(req,res){
    const tasks = await Task.find();
    res.send(tasks);
});

app.post("/tasks",async function(req,res){
    const newtask =await Task.create({title:req.body.title});
     res.send(newtask);
});

app.delete("/tasks/:id",async function(req,res){
    let deltask= await Task.findByIdAndDelete(req.params.id);
    res.send(deltask);
});

app.put("/tasks/:id", async function(req,res){
    const updtask= await Task.findById(req.params.id);
    updtask.completed = ! updtask.completed;
    await updtask.save();
    res.send(updtask);

})

app.listen(3000,()=>{console.log("Server Connected!")})

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: {
      type:String,
      default:"Pending"
    }
});

const Task = mongoose.model("Task", taskSchema);

app.get("/api/tasks", async(req,res)=>{
    const tasks = await Task.find();
    res.json(tasks);
});

app.post("/api/tasks", async(req,res)=>{
    const task = await Task.create(req.body);
    res.json(task);
});

app.delete("/api/tasks/:id", async(req,res)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.json({
      message:"Deleted Successfully"
    });
});

app.get("/",(req,res)=>{
    res.send("Task Manager Backend Running");
});

app.listen(5000,()=>{
    console.log("Server Running On Port 5000");
});

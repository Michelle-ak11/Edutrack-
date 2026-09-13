const express = require('express');
const app= express();
const mongoose = require('mongoose');
const Student = require('./modules/Students');
const cors = require('cors');
app.use(cors());
//To accept json data in request body
app.use(express.json());

// connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/studentDB', 
).then(()=>{ console.log("Connected to MongoDB");
}).catch((err)=>{ console.error("Connection error", err.message);
});



// Define routes
app.get('/', (req, res)=>{
    res.send("Server is running");
});

//adding students
app.post('/students', async (req, res) => {
    try{
        const student =new Student(req.body);
        await student.save();
        res.status(201).send(student);
    }catch(err){
        res.status(400).send({error:err.message});
    }
});
//get all students
app.get('/students',async(req, res)=>{
    try{
        const student= await Student.find();
        res.send(student);
    }catch(err){
        res.status(500).send({error:err.message});
    }
});

//get student by regNo
app.get('/students/:regNo', async(req, res)=> {
    try{
        const student = await Student.findOne({regNo: req.params.regNo});
        if(!student){
            return res.status(404).send({error:"Student not found"});
        }
        res.send(student);
    }catch(err){
        res.status(500).send({error:err.message});
    }
});


// get student by name
app.get('/students/:name', async(req, res)=>{
    try{
        const student = await Student.find({name:req.params.name});
        if(student.length===0){
            return res.status(404).send({error:"No STudent found with this name"});
        }
        res.send(student);
    }catch(err){
        res.status(500).send({error: err.message});
    }
});

//Update student by name
app.put('/students', async(req, res)=>{
    try{
        const student = await Student.findOneAndUpdate(
         { name:req.params.name},// find by name
         req.body,//update with new data
          {new:true, runValidators: true}  // return updated doc
        );'\\'
        if(!student){
            return res.status(404).send({error:"Student not found"});
        }
        res.send(student);
    }catch(err){
        res.status(500).send({error: err.message});
    }
});

//Delete student by name
app.delete('/student/name/:name', async(req, res)=>{
    try{
        const student =await Student.findOneAndDelete({
            name:req.params.name
        });
        if(!student){
            return res.status(404).send({error:"No Student found with this name"}); 
        }
        res.send({message:"Student deleted!"});
    }catch(err){
        res.status(500).send({error:err.message})
    }
});

//save signup info
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
  
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


//To start server

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
});




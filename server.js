const express=require("express");
require('dotenv').config()
const mongoose=require('mongoose')
const cors = require('cors')
const app=express();
const taskRoutes=require('./routes/taskRoute');


app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://admin:admin@taskmanager.ikvbcnd.mongodb.net/?retryWrites=true&w=majority")

app.use('/',taskRoutes);

app.get("/welcome",(req,res)=>{res.json("welcome")})

app.listen('4000',()=>{
    console.log("MongoDB is connected successfully server is running on port "+'4000')});
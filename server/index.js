const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors")
const Employeemodel=require('./models/Employee')

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect(" //database string");
app.post('/login',(req,res)=>{
    const{email,password}=req.body;
    Employeemodel.findOne({email:email}).then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }else{
                res.json("Invalid password")
            }
        }else{
            res.json("No such user exist")
        }
    })

})
app.post('/register',(req,res)=>{
    Employeemodel.create(req.body).then(employees=>res.json(employees)).catch(err=>res.json(err))

})
app.listen(3001,()=>{
    console.log("server")
})

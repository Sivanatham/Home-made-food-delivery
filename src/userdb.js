const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();
const userdb=require('./Logindb');

//CREATE

router.post('/register',async(req,res)=>{
try{
    const newUser= new userdb({
        name:req.body.name,mailID:req.body.mailID,password:req.body.password
    });
 await newUser.save();
    res.status(201).json({ message: " User created successfully!" });
}
catch(error){
    res.status(500).json({
        error:error.message
    })
}});
module.exports = router;
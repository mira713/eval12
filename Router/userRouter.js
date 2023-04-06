const express = require('express');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const {UserModel} = require("../model/userModel")
const bcrypt = require('bcrypt');
require('dotenv').config();

userRouter.get('/',(req,res)=>{
    res.send('hi from userRouter')
});

userRouter.post('/register',async(req,res)=>{
    const {name,email,password} = req.body;
    try{
        bcrypt.hash(password,3,async(err,hash)=>{
            if(err){
                res.send('something went wrong while hashing');
            }else{
                const user = new UserModel({name,email,password:hash});
                await user.save();
                res.send('registered')
            }
        })
    }catch(e){
        res.send(e.message)
    }
})

userRouter.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await UserModel.find({email});
        const token = jwt.sign({userId : user[0]._id},process.env.key);
        if(user.length){
            bcrypt.compare(password,user[0].password, function(err,result){
                if(result){
                    res.send({"msg":"logged in",token,user})
                }else{
                    res.send("password mismatched")
                }
            })
        }else{
            res.send("user not found")
        }
    }catch(e){
        res.send(e)
    }
})

module.exports={
    userRouter
}
const express = require('express');
const appoRouter = express.Router();
const {doctorModel} = require('../model/doctorModel');

appoRouter.post('/post',async(req,res)=>{
   try{
    const data = new doctorModel(req.body);
    await data.save();
    res.send(req.body)
   }catch(e){
    res.send(e.message)
   }
})

appoRouter.get('/get',async(req,res)=>{
    try{
        const data = await doctorModel.find();
        res.send(data);
    }catch(e){
        res.send(e.message);
    }
})

appoRouter.patch('/slots/:id', async(req,res)=>{
    const id = req.params.id
    const post = await doctorModel.findOne({_id:req.params.id});
    post.slots = post.slots-1;
    const payload = post
    console.log(post)
    console.log(payload)

    try{
            await doctorModel.findByIdAndUpdate({_id:id},payload)
            res.send(post)
    }catch(e){
        res.send(e.message);
    }
})

appoRouter.get('/filter/:id', async(req,res)=>{
    const id = req.params.id
    const payload = post

    try{
            await doctorModel.find();
            res.send(post)
    }catch(e){
        res.send(e.message);
    }
})


module.exports={
    appoRouter
}
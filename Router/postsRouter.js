const express = require('express');
const { LoggedModel} = require('../model/postModel');
const loggedRouter = express.Router();

loggedRouter.get('/',async(req,res)=>{
    try{
        let posts = await LoggedModel.find();
        res.send(posts)
    }catch(e){
        res.send(e.message)
    }
});

// loggedRouter.get('/top', async(req,res)=>{
//     try{
//         let post = await LoggedModel.find({no_if_comments});
//         res.send(post)
//     }catch(e){
//         res.send(e.messagge)
//     }
// })

// loggedRouter.post('/create', async(req,res)=>{
//     try{
//         const posts = new LoggedModel(req.body);
//         await posts.save();
//         res.send(req.body);
//     }catch(e){
//         res.send(e.message)
//     }
// })

// loggedRouter.patch('/update/:id',async(req,res)=>{
//     const id = req.params.id
//     const payload = req.body;
//     const post = await LoggedModel.findOne();
//     const id_in_post = post.user;
//     const id_of_user = req.body.user;

//     try{
//         if(id_in_post==id_of_user){
//             await LoggedModel.findByIdAndUpdate({_id:id},payload);
//         }else{
//             res.send('could not find the posts')
//         }
//     }catch(e){
//         res.send(e)
//     }
//     res.send('updated')
// })

// loggedRouter.delete('/delete/:id',async(req,res)=>{
//     const id = req.params.id
//     const post = await LoggedModel.findOne();
//     const id_in_post = post.user;
//     const id_of_user = req.body.user;

//     try{
//         if(id_in_post==id_of_user){
//             await LoggedModel.findByIdAndDelete({_id:id});
//         }else{
//             res.send('could not find the posts')
//         }
//     }catch(e){
//         res.send(e)
//     }
//     res.send('deleted')
// })


module.exports={
    loggedRouter
}
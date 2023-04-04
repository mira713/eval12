const express = require('express');
require('dotenv').config();
const {connection}= require('./config/db')
const {userRouter} = require('./Router/userRouter')
const {loggedRouter} = require('./Router/postsRouter');
const {authenticate} = require('./middleware/authenticate');
const cors = require('cors');
const app = express();


app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('welcome to investment calculator')
});

app.use('/users',userRouter)
app.use(authenticate);
app.use("/profile",loggedRouter)

let port = process.env.port

app.listen(port,async()=>{
    await connection
    console.log(`port running on ${port}`)
    console.log('connected to db')
})
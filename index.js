const express = require('express');
require('dotenv').config();
const app = express();
const {authenticate} = require('./middleware/authenticate')
const {connection} = require('./config/db')
const {userRouter} = require('./Router/userRouter');
const {appoRouter} = require('./Router/appo');
const cors = require('cors');

app.use(cors({
    origin:"*"
}))
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("welcome");
})

app.use('/users',userRouter);
app.use(authenticate);
app.use('/appointments',appoRouter);

let port = process.env.port
app.listen(8000,async()=>{
    await connection
    console.log(`port running on ${port}`);
    console.log("connected to db")
})
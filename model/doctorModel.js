const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    name : String,
    image : String,
    specialisation:String,
    experience:Number,
    location:String,
    date : String,
    fee : Number,
    slots : Number,
    user:String
},{
    versionKey : false
})

const doctorModel = mongoose.model("doctor",doctorSchema);

module.exports={
    doctorModel
}
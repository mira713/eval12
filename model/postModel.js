const mongoose = require('mongoose');

const LoggedSchema = mongoose.Schema({
    name:String,
    email:String,
    user : String
}, {
    versionKey: false
})

const LoggedModel = mongoose.model("profile", LoggedSchema);

module.exports = {
    LoggedModel
}
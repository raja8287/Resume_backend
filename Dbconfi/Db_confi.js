const mongoose=require("mongoose");
require('dotenv').config()
mongoose.connect(`${process.env.con}`);
const UserSchema=new mongoose.Schema({
    Name:String,
    Gender:String
})
module.exports=mongoose.model("Userdata",UserSchema);
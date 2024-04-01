const mongoose=require("mongoose");
require('dotenv').config()
mongoose.connect(`${process.env.con}`);
const UserSchema=new mongoose.Schema({
    Name:String,
    Postion:String,
    Dicription:String,
    Pro_img:String,
    Banner_img:String,
    Rs:String,

})
module.exports=mongoose.model("Userdata",UserSchema);
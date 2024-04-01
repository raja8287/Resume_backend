const mongoose=require("mongoose");
require('dotenv').config()
mongoose.connect(`${process.env.con}`);
const ProSchema=new mongoose.Schema({
    Img_pro:String,
    Title:String,
    Dicription:String,
    Source_code:String,
    link_code:String,
    

})
module.exports=mongoose.model("Prodata",ProSchema);
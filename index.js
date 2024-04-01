const express=require("express");
const app=express();

require("dotenv").config();
var bodyParser = require("body-parser");
const Port=process.env.Port ||4000
const dm=require('./Dbconfi/Db_confi');
const pro=require('./Dbconfi/Project')
const cors=require('cors');
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json({limit:'500mb'}));
app.use(express.urlencoded({limit:'500mb'}));
app.use(bodyParser.json());


app.get('/',async(req,resp)=>{
    let data= await dm.find();
    console.log("this:",data)
    resp.send(data);
})

app.post('/',async(req,resp)=>{
    console.log(req.body);
    let data=await dm.create({
        Name:req.body.Name,
        Postion:req.body.Postion,
        Dicription:req.body.Dicription,
        Pro_img:req.body.Pro_img,
        Banner_img:req.body.Banner_img,
        Rs:req.body.Rs,
        
    })
if(data){
    resp.send(`done ${data}`);

}
else{
    resp.send("Sorry data is not Uploaded")
}


})

app.get('/pro',async(req,resp)=>{
    let data=await pro.find();
resp.send(data)
})
app.post('/pro',async(req,resp)=>{
    let data=await pro.create({
        Img_pro:req.body.Img_pro,
        Title:req.body.Title,
        Dicription:req.body.Dicription,
        Source_code:req.body.Source_code,
        link_code:req.body.link_code,
    })
    resp.send(data);
    
})

app.listen(Port,()=>{
    console.log(` sever is runing on ${Port}`);
})
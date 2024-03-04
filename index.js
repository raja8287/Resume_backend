const app=require("express")();
require("dotenv").config();
var bodyParser = require("body-parser");
const Port=process.env.Port ||4000
const dm=require('./Dbconfi/Db_confi');
const cors=require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',async(req,resp)=>{
    let data= await dm.find();
    console.log("this:",req.body)
    resp.send(data);
})
/*
app.post('/',async(req,resp)=>{
    console.log(req.body);
    let data=await dm.create({
        Name:req.body.Name,
        Gender:req.body.Gender
    })


    resp.send(`done ${data}`);

})*/



app.listen(Port,()=>{
    console.log(` sever is runing on ${Port}`);
})
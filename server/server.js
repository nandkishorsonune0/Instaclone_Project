
const express= require ("express")
const mongoose = require("mongoose");
const multer=require("multer")
const postModel = require("./model/post")
const app=express()
const fs=require("fs")
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))



//storage
const Storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({
    storage:Storage
}).single("testimage")

mongoose.connect("mongodb+srv://nandkishor:nandkishor@instaclone.bujsk.mongodb.net/instaclone?retryWrites=true&w=majority",()=>{
    console.log("coonect to db...");
},(err)=>{
    console.log(err);
});
// mongoose.connect("mongodb://localhost/instaclone2",()=>{
//     console.log("coonect to db...");
// },(err)=>{
//     console.log(err);
// });


app.post("/post",(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }else{
            const newImage=new postModel({
                author:req.body.name,
                location:req.body.location,
                description:req.body.description,
                date:req.body.date,
                image:{
                    data:fs.readFileSync("uploads/" +req.file.filename) ,
                    contentType:"image/png"
                }
            })
            newImage.save().then(()=>{
                res.send("success")
            }).catch((err)=>{
                console.log(err)
            })
        }
    })
})

app.get("/",(req,res)=>{
    try{
        postModel.find().sort({_id:-1}).then((allData)=>{
            res.status(200).json(allData)
        })
    }catch(err){
        console.log(err)
    }
})

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log("Server started.......on",port);
});
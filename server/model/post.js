const mongoose =require("mongoose")

const postSchema=new mongoose.Schema({
    image:{
        data:Buffer,
        contentType:String
    },
    author:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    like:{
        type:Number,
        default:24
    }

})



const postModel=mongoose.model("post",postSchema)

module.exports=postModel
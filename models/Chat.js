const mongoose=require("mongoose")

const chatScehme =new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    created_at:{
type:Date,
required:true
    },
    msg:{
type:String,
maxLength:50
    }
});

const Chat=mongoose.model("Chat",chatScehme);
module.exports=Chat;
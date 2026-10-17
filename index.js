const express=require("express");
const app=express();
const mongoose=require("mongoose")
const path=require("path");
app.use(express.urlencoded({ extended: true }));
const methodOverride=require("method-override")
app.use(methodOverride("_method"))
const Chat=require("./models/Chat")
    
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))
main().then(()=>{
    console.log("connection sucessfull");
})
.catch(err=>{
    connsole.log("failed")
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

app.get("/",(req,res)=>{
    res.send("root page")
})
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
})
app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
res.redirect("/chats");
})

app.post("/chats", async (req, res) => {
    try {
        console.log("Form data:", req.body);

        const { from, to, msg } = req.body;

        const newChat = new Chat({
            from,
            to,
            msg,
            created_at: new Date()
        });

        const savedChat = await newChat.save();

        console.log("Chat saved successfully:", savedChat);

        res.redirect("/chats");
    } catch (err) {
        console.error("Error saving chat:", err);
        res.status(500).send("Failed to save chat: " + err.message);
    }
});
app.get("/chats/:id/edit",async(req,res)=>{
let{id}=req.params;
let chat= await Chat.findById(id);
res.render("edit.ejs",{chat})
})
app.put("/chats/:id",async(req,res)=>{
    let{id}=req.params;
    let{msg:newMsg}=req.body;
    let updatedmsg= await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true,new:true});
    res.redirect("/chats")
})
app.get("/chats",async(req,res)=>{
let chats=await Chat.find();
console.log(chats)
res.render("index.ejs",{chats});
})




app.listen(8080,()=>{
    console.log("listening at port 8080");
})


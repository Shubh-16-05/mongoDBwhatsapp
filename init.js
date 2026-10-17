const mongoose=require("mongoose")
const Chat=require("./models/Chat")

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

main().then(()=>{
    console.log("connection sucessfull");
})
.catch(err=>{
    connsole.log("failed")
})

const allMsg = [
  
  {
    from: "shubham",
    to: "shubh",
    created_at: new Date(),
    msg: "hey bro, how are you?"
  },
  {
    from: "rahul",
    to: "shubh",
    created_at: new Date(),
    msg: "what are you doing?"
  },
  {
    from: "shubh",
    to: "rahul",
    created_at: new Date(),
    msg: "just learning MongoDB"
  },
  {
    from: "aman",
    to: "shubham",
    created_at: new Date(),
    msg: "are you coming today?"
  },
  {
    from: "shubham",
    to: "aman",
    created_at: new Date(),
    msg: "yes, I will be there"
  },
  {
    from: "priya",
    to: "shubh",
    created_at: new Date(),
    msg: "please send me the notes"
  },
  {
    from: "shubh",
    to: "priya",
    created_at: new Date(),
    msg: "sure, I will send them"
  },
  {
    from: "rohit",
    to: "shubham",
    created_at: new Date(),
    msg: "let's meet tomorrow"
  },
  {
    from: "shubham",
    to: "rohit",
    created_at: new Date(),
    msg: "okay bro, see you tomorrow"
  }
];

Chat.insertMany(allMsg);
const express=require("express");
const { default: mongoose } = require("mongoose");
const List=require("./schema/data")
const List1=require("./schema/list1")
const auth=require("./middleware/auth")
const Register=require("./schema/login")
const app=express();

app.use(express.json());
app.get('/',(req,res)=>{
    res.json("egc")
})
mongoose.connect("mongodb+srv://kishor7008:kishor7008@cluster0.2jj6aqx.mongodb.net/feyman?retryWrites=true&w=majority",()=>{
    console.log("db connected")
})


app.post("/posted",async(req,res)=>{
try{
    const data=req.body;
   const resp=new List(data);
   const add=await resp.save();
   console.log(add);
   res.json(add)
}catch(err){
console.log(err);
res.json("err")
}
})

app.post("/posted/list1",async(req,res)=>{
    try{
        const data=req.body;
       const resp=new List1(data);
       const add=await resp.save();
       console.log(add);
       res.json(add)
    }catch(err){
    console.log(err);
    res.json("err")
    }
    })
app.get("/list",async(req,res)=>{
    const list=await List.find()
console.log(list);
res.json(list)

})

app.post("/posted/login",async(req,res)=>{
    try{
        const data=req.body;
       const resp=new Register(data);
       const add=await resp.save();
       console.log(add);
       res.json(add)
    }catch(err){
    console.log(err);
    res.json("err")
    }
    })

    app.post("/login",auth,async(req,res)=>{
        if(req.body.username=="kishor7008"){
            const list=await List.find()
            console.log(list);
            res.json(list)
        }else{
            const list=await List1.find()
            console.log(list);
            res.json(list)
        }
        
    })
const port=process.env.PORT || 4000;
app.listen(port,()=>{
    console.log("server started")
})
const jwt=require('jsonwebtoken')
const Register=require("../schema/login");
const auth=async(req,res,next)=>{
try{
const token=req.body.username;
const data=await Register.findOne({username:token})
if(data){
    console.log("user authentication")
    
    next()
}
}catch(err){
console.log(err)
res.send("error")
}
}

module.exports=auth;
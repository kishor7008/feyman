const mongoose=require("mongoose");

const Login=mongoose.Schema({
      username:{
        type:String,
        required:true,
      }

})

const Register=mongoose.model("login",Login)
module.exports=Register;
const mongoose=require("mongoose");

const Data=mongoose.Schema({
      topic:{
        type:String,
        required:true,
      },
      details:{
        type:String,
        required:true,
      }

})

const List=mongoose.model("list",Data)
module.exports=List;
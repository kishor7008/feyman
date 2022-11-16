const mongoose=require("mongoose");

const Data1=mongoose.Schema({
      topic:{
        type:String,
        required:true,
      },
      details:{
        type:String,
        required:true,
      }

})

const List1=mongoose.model("list1",Data1)
module.exports=List1;
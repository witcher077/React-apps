const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/food-app-auth")
    .then(() => {
        console.log("mongodb Connected");
    })
    .catch((e) => {
        console.log(e)
    })

    const newSchema=new mongoose.Schema({
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    })

    const collection=mongoose.model("collection",newSchema);
    module.exports=collection;
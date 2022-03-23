const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    first_name:{type:String, required:true},
    last_name:{type:String, required:true, },
    email:{type:String, required:true,unique:true},

    pincode:{type:String, required:true, minLength:6, maxlength:6},
    age:{type:Number, required:true, min:1, max:100},
    gender:{type:String, required:true, enum:["male","female","Others"]}
})


const User= mongoose.model("user",userSchema)


module.exports= User
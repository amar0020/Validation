const { Router } = require("express");

const User = require("../model/user.model")

const router = Router();


router.post("", async (req,res)=>{
    try{
        const data = await User.create(req.body)
        res.send(data)

    }
    catch(err){

        console.log(err)

    }
})

module.exports= router
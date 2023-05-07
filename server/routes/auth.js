const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    res.send("hi")
})

router.post("/signup", (req, res)=>{
    const { name, email, password } = req.body;
    if(!email || !password || !name){
        res.status(422).json({err: "please add all the fields"})
    }
    res.json({msg: "succesfully sent"})
})

module.exports = router
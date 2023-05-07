const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs")

router.get("/", (req, res) => {
  res.send("hi");
});

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    res.status(422).json({ err: "please add all the fields" });
  }
//   res.json({ msg: "succesfully sent" });

  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already exists with that email" });
      }
      bcrypt.hash(password, 10)
      .then(hashedPassword =>{
          const user = new User({
            email,
            name,
            password: hashedPassword,
          });
          user.save();

        })
        .then(user => {
          res.json({ msg: "added succesfully" }).catch(err => {
            console.log(err);
          });
        });
    })
});

router.post("/signin", (req, res)=>{
    const {email, password} = req.body
    if(!email || !password){
        res.status(422).json({ error: "please add email or password"})
    }
    User.findOne({email: email})
    .then(savedUser =>{
        if(!savedUser){
            return res.status(422).json({ error: "invalid email or password"})
        }
        bcrypt.compare(password, savedUser.password)
        .then(doMatch =>{
            if(doMatch){
                res.json({msg: "succesfully signed in"})
            }else{
                return res.status(422).json({error: "invalid password"})
            }
        })
        .catch(err =>{
            console.log(err);
        })
    })
})

module.exports = router;

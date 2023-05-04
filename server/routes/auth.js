import express from "express"
import { Router } from "express"

const router = Router()

router.get("/", (req, res)=>{
    res.send("hi")
})

router.post("signup", (req, res)=>{
    console.log(req.body); 
})

export default router
import express from "express"
import * as dotenv from 'dotenv'
import mongoose from "mongoose"
// import User from "./models/User"
import AuthRoutes from "./routes/auth.js"

// require("./models/user")

const app = express()
dotenv.config()

// app.use(require("./routes/auth"))
app.use(express.json())
app.use(AuthRoutes)

const startApp = ()=>{
    try{
        mongoose.set("strictQuery", false)
        mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}, console.log("Mongodb connect"))
        
        const PORT = process.env.PORT || 4000
        app.listen(PORT, ()=> console.log(`server is connect port ${PORT}`))

    } catch(error){
        console.log(error);
    }
}

startApp()
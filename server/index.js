const express = require("express")
const mongoose = require("mongoose")
const {MONGO_URI} = require("./keys")

require("./models/user")
require("./models/post")
mongoose.connect(MONGO_URI)

const app = express()

app.use(express.json())
app.use(require("./routes/auth"))
app.use(require("./routes/post"))

app.get("/", (req, res)=>{
    res.send("hi")
})


const PORT = 4000
app.listen(PORT, ()=> console.log(`server is connect port ${PORT}`))
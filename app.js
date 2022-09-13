const express = require("express")
const app = express()
const mongoose = require("mongoose")
const {MONOURL}=require("./secret")
const port = 5001



mongoose.connect(MONOURL)
mongoose.connection.on("connected",()=>{
    console.log("connected to mongo")
})
mongoose.connection.on("erroe",(err)=>{
    console.log(" couldnot connected to mongodb," ,err)
    
})
require("./models/user")
app.use(express.json())
app.use(require("./routes/auth"))

app.listen(port,function(){
    console.log("server is running on port:",port)
})
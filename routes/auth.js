const express =  require('express')
const router = express.Router()
const mongoose= require('mongoose')
const User = mongoose.model("User")
router.get("/",(req, res)=> {
    res.send("Hello World")
  })
  router.post("/signup",(req, res)=> {
   console.log(req.body)
   const {name, email, password} = req.body
   if(!email || !name|| !password){
    res.json({error:"all required"})
   }
   
   
   User.findOne({email: email})
   .then((savedUser)=>{
    if(savedUser!=null){
     res.json({message:"already exist"})
    }
    const user = new User({
      name, email,password
    })
   user.save()
   .then(
    (user)=>{
      res.json({message:"we did it "})
    }
   )
    .catch( (err)=>{
      console.log(err)
    })
   
})
.catch( (err)=>{
  console.log(err)
})
 

})
  module.exports= router
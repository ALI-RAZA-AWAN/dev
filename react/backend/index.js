
const express= require('express');
const app = express()

const userScehma= require("./public/javascripts/user")

// app.get("/create",async function(req,res){
//   const createduser=await userScehma.create({
//     username:"AliRaza", nickname:"Ali",
//     description:"wertyuiasdfghjkxcvbnm",
//     categories:['js','node','gsap','modern animations']
//   })
//   res.send(createduser);
// });

app.get("/create",async function(req,res){
  const createduser=await userScehma.create({
    username:"zeeshan", nickname:"shani",
    description:"i am a charsi and everytime on laptop or mobile.",
    categories:['hairlong','laptop','battery','foodie']
  })
  res.send(createduser);
});

app.get("/alluser",async function(req,res){
  const allusers =await userScehma.find();
  res.send(allusers);
})

// app.set("view engine","ejs");
// app.use(function(req,res,next){
//     next();
// })
// app.get('/', function(req, res){
//     res.render("index");
// })

// app.get('/profile', function(req,res){
//     res.send("hello in your profile")
// })
// app.get('/profile/:username', function(req,res){
//     res.send(`profile  ${req.params.username}`)
// })

app.listen(3000, ()=>{console.log("server running")});
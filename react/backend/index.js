const express= require('express');
const app = express()

app.set("view engine","ejs");
app.use(function(req,res,next){
    next();
})
app.get('/', function(req, res){
    res.render("index");
})

app.get('/profile', function(req,res){
    res.send("hello in your profile")
})
app.get('/profile/:username', function(req,res){
    res.send(`profile  ${req.params.username}`)
})

app.get
app.listen(3000);
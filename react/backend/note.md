## data travel
Data into packets gone from mobile to nearest tower and tower company check its whitelisted or black one
if whitelisted then tower convert them into electrical signal and send through cables 
### through router
if your device not directed connnect to internet and connect to wifi then first message goes to router (which in house) and then this router send the msg also router has mac-address of each device connected to it that why it send msg to it correct device.

### server
a computer system designed to receive request and response with the data required in request and send that data is callled server.

#### http: hyper text transfer protocol 
based on this protocol internet serve without it nothing run and these are specific rules have to follow inorder to send and recieve the data

so the data eject from device into packets and if its http then i can see data throgh a special router but if its https then dont bcz data is encrypted 

#### https: hyper text transfer protocol secured

### ports:
 these are numbers like 3000 so we use to connect client with server
some are open and some are closed ports
When a device communicates over a network, data packets are sent to its IP address. Each packet also includes a port number, which tells the operating system which application or service should receive that data.

Port numbers identify services: Each application listens on a specific port, so incoming data reaches the correct program.
IP + Port + Protocol = Socket: This combination ensures that network traffic is delivered precisely to the right process on the right device.

#### Ports act like entry doors for data — the IP brings the data to the device, and the port directs it to the correct application.


## import and export
for export we write module.exports = d; and one file only export one time
if more than one data then module.exports = {first:a, second:b;}
for import we write const d= require('./filename')

### V8 engine code has the power to create server not the js itself
first the code of c++ extract from google chrome engine so we cant write code in js instead of c++ to tackle this problem the man wrap the c++ code with js so now our code first goes to js then it convert into c++ and send to that c++ code of v8 engine.

so now if this c++ and js code combine then this will be called Nodejs.

## run any file js in backend ' node ./filename ' in terminal

## express
framework for nodejs
usecase => routing => diff urls

types of route : get, post, put, delete, patch

const express = require('express')
const app = express()

app
app.get('/', function(req,res){
    res.send('hello world')
})

app.listen(3000);

## package express , nodemon -g  (here -g means global install in windows if not -g then in that specific folder)

and now if you write nodemon ./filename instead of node ./filename 
you don't restart the server after changes. if gives error then write npx at start.

## Middleware
 ek esa function ha jo kisi bhi route se pehle chalta ha jiska maqsad ap ka route chalne se pehle agar ap koi kam karana chahate hu tu woh chale ga
 jese route pe chalne se pehle print karo or sath mai hit counter increase karo
 ### yehni jo route chalne se pehle chale ga middleware ha chahe jitne bhi route hu har se pehle middleware chalta ha
make more than 1 middlewares as much you want
 synta:  app.use(function(req,res,next){
    console.log("hello");
    next(); // we use next() bcz after running middleware we ask him to go for next (the route)
 });

 
 ### NODE VS EXPRESS 
 node is the main thing express ke code se hum server ka code likhte ha or server kaise react karega

 ### what is expressjs 
 package, routing

 ### why express js 
 http in nodejs is difficult to use, express make it easier 

 ### routing
 routes banane ke process ko hm kehte ha routing
/profile
/home
/contact

profile/ali
profile/umar
profile/shani

here some common and the last part changes so here come Dynamic routing

profile/:var   here you write parameter you write colon and var name 

to make any route dynamic you use colon : and to get that we use backtick ` ` and write ${} in that like `${req.params.var}`

### template engines
ejs is html with superpower like you do calculations

1) npm i ejs
2) configure it
 app.set("view engine","ejs");
3) ek views folder
4) ejs files banao
5) send ki jagah render karo
app.get('/', function(req, res){
    res.render("index");

<%= age %>  

### to setup static files

1) create folder called public
2) create folders inside it images, stylesheet, js whatever you want
3) configure express static in index.js file  
app.use(express.static("./public"));   when you write this then dont write path ./public/images 
you just write /images 
also if you are in folder and you wanna in another folder then you first getout from that folder
so then you write "../images" now you go from that folder to images folder in public folder
but here you define the static files path so write "/images"
4) understand the path


## error landling
use documentation


### setup 
express js i
express js boilerplate code
     means create the server and route
express js ejs setup
         setview and makefolder and create ejs files and render
express static files setup
architecture of public folder


### database

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/dbname");

// schema create
const userSchema = mongoose.Schema({
    username: string,
    name: String,
    age : Number
})

module.exports = mongoose.model("nam",schema) -> mongoose.model("user", userschema);

now require in index.js
const userModel = require ("./user")

app.get("/create", async function(req,res){
   const userCreated= await userModel.create({
        username:"Ali",
        age: 25,
        name:"Ali"
    })
    res.send(userCreated);
})

app.get("/users",async function(req,res){
    let allusers=await userModel.find();
    res.send(alluser)

    if you gonna find specific then
    userModel.findOne({username:"Ali"});

})

app.delete("/delete",async function(req,res){
    let deleteduser =  await userModel.findOneAnd Delete({username:"Ali"});
res.send(deletduser);
});


### to find specific
app.get("/user",async function(req,res){
  const user= await userScehma.find({username:"AliRaza"});
  res.send(user);
})

### to do incase sensitive 
we use regular expression
var regex =new RegExp(serach,flags) -> ("ALi",'i');
let user = await userModel.find({username: regex})

### problem with that
it give all the users which contain that ali or Ali 
anywhere in that name so to solve that problem

## ^ shurh ese ho
## $ khatam ese ho
write if exact ali required regex("^ali$",'i')

### specif categories users
userScehma.find({categories:'battery'});
userScehma.find({categories:{$all:['battery']}});

## client and server

client-> cookies (cookies used to save data at frontend, browser)

server-> session (session used to save data at server)

## session creation
first i package express-session
then app.use in app.js
then in index.js
make route and write req.session.ban=true;  -> req.session.value=value;
res.render("index");

then make any route to fetch that like console.log(req.session);
to delete write route and req.session.destroy(function(err){
    if(err) throw err;
    res.send("removed")
 })
after retart server the session value reset.


## cookies creation
package cookiesparser
route.get("route",function(){res.cookies("age",25);
res.send("index")})

to read that cookies write console.log(req.cookies) or if specific then req.cookies.age
bcz cookies are on browser not backend so req used to trvel from front to back and res used from back to front.

to delete 
res.clearCookie("age");  

### authentication and authorization


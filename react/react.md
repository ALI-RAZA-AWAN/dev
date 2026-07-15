to connect react lib and browser use react dom 

# react through cdn 
var h1=React.createElement('h1',null,"hello from react");
var parent= document.querySelector(#parent);
var root = ReactDOM.createRoot(parent);
root.render(h1);

basically its like you work react with html, css and js in differnt files.

jsx- javascript xml extension js html ka combination-------------------------

so in jsx mainly this we write as basic
function app(){
    return "helllo";
}
export default app;

so in function we cant return 2 things like 
'return'(<h1></h1>  <h1></h1>)'' wrong 
so we use return'(<div><h1></h1><h1></h1></div>)' 
 
# variables create and use ---------------
 const a=10;
 \<h1>hello {a}\</h1>

# functions----------------------------------
write all functions under the function app
and write arrow function and also while calling it in btn just write name not braces() 
let name="ali";
const abs=()=>{
    name="umar"
 }

\<button onclick={abs}>\</button> 

# bt here you do it wrong you cant direct interact with DOM ask react to deal with it and also it has virtual doms. Here the concepts of HOOKS came.
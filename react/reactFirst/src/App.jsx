import { useState } from "react"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function app(){
  const [name,setName]=useState("");
 
  return (

     <>
     <Navbar/> <Footer/>
     </>



    // <div>
    // <form onSubmit={(e)=>{e.preventDefault(); console.log(name); setName("");
    // }}>
    //   <input placeholder="Enter your name" className="px-4 py-3 rounded text-ml m-5" type="text" value={name} onChange={(e)=>{ setName(e.target.value); }} />
    //   <button className=" px-4 py-3 text-white bg-emerald-600 rounded font-semibold"  >Submit</button>
    // </form>
    // </div>
  )
}
export default app; 
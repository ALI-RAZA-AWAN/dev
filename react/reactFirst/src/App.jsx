import { useState } from "react"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
function app(){
  const [name,setName]=useState("");
 
  return (

     <>
     <Navbar/> <Card/><Footer/>
     </>



    
  )
}
export default app; 
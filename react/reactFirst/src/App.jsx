import { useState } from "react"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import Getdata from './components/Getdata'
function app(){
  const [name,setName]=useState("");

  const users= [
  {
    "id": 1,
    "name": "Aarav Sharma",
    "age": 28,
    "city": "Mumbai",
    "profession": "Full Stack Developer",
    "profile_pic": "https://example.com/images/profiles/aarav.jpg"
  },
  {
    "id": 2,
    "name": "Sophia Chen",
    "age": 32,
    "city": "San Francisco",
    "profession": "Data Scientist",
    "profile_pic": "https://example.com/images/profiles/sophia.jpg"
  },
  {
    "id": 3,
    "name": "Zain Malik",
    "age": 25,
    "city": "Lahore",
    "profession": "UI/UX Designer",
    "profile_pic": "https://example.com/images/profiles/zain.jpg"
  },
  {
    "id": 4,
    "name": "Elena Rostova",
    "age": 30,
    "city": "Berlin",
    "profession": "DevOps Engineer",
    "profile_pic": "https://example.com/images/profiles/elena.jpg"
  },
  {
    "id": 5,
    "name": "Marcus Vance",
    "age": 35,
    "city": "London",
    "profession": "Product Manager",
    "profile_pic": "https://example.com/images/profiles/marcus.jpg"
  }
]
 
  return (

     <> 
     
     
     
     
     {/* <Navbar/>
      <Getdata/> 
       */}
      







     {/* for card display      */}
     {/* <div className=" absolute bg-cyan-500">
      
      {users.map(function(elem, keyx){
        return <Card key={keyx} name={elem.name} age={elem.age} city={elem.city} prof={elem.profession} photu={elem.profile_pic}/>
      })}
      
      </div>  */}
     </>



    
  )
}
export default app; 
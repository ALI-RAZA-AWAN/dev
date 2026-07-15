import { useState } from "react";

function app(){
  const [name,setName]=useState("Ali");
  const chnagename=()=>{
    setName("Umar");
  }
  return (
    <div>
      <h1>My name is {name}</h1>
      <button onClick={chnagename}>Change name</button>
    </div>
  )
}
export default app; 
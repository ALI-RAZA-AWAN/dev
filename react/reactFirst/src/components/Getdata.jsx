import React, { useState } from "react";
import axios from 'axios';
const Getdata =()=>{
 const [data, setData]=useState([])

   const getdata=async ()=>{
 const response= await  axios.get('https://picsum.photos/v2/list');
     setData(response.data)
   }
   
   
    return(
        <div className="p-10">

        <button onClick={getdata} className="bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90">Get Data</button>
        <div className="p-5 mt-5 text-white bg-gray-950">
          {data.map(function(elem, idx){
            return <div key={idx} className=" bg-gray-50 text-black flex items-center justify-between px-7 py-6 rounded mb-3">
                <img className="h-40" src={elem.download_url} alt="phat gai" />
                <h1>{elem.author}</h1>
                 </div>
          })}
        </div>
        </div>
    )
}
export default Getdata
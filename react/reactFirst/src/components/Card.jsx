import React from "react";
const Card=(props)=>{
    return(
        <div className="text-black bg-white rounded m-10 inline-block p-6 text-center">
            <img className="h-32 w-32 rounded-full mb-3" src={props.photu} alt="" />
            <h1 className="text-2xl font-semibold mb-4">{props.name}</h1>
            <h4 className="text-blue-600">{props.prof}</h4>
            <h2>{props.city}, {props.age} </h2>
            <button className=" mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium">Add Friend</button>
        </div>

    )
}
export default Card
import React,{useState} from "react";

export default function Excercise1()
{
  const[color,setColor]=useState( );
  const getColor=(e)=>setColor(e.target.value)
    return(
        <div>
        <div  className="color" id="d1">
             </div>
             <input type="text" onChange={getColor}/>
             <br/>
             <button onClick={()=>document.getElementById("d1")
             .style.backgroundColor=color}>click to change div color

             </button>
        </div>
    );

}
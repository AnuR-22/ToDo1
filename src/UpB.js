import React from 'react'
import {useContext} from "react";
import{UserContext} from"./LiftingstateUp";
export default function UpB() {
  let{colour,height,width}=useContext(UserContext);
  const show2=()=>{
    document.getElementById("demo").style.height=height;
    document.getElementById("demo").style.width=width;
    document.getElementById("demo").style.backgroundColor=colour;
    document.getElementById("demo").style.display="inline";
  }
  return (
    <div >
        <div id="demo">
          <button onClick={show2}>block</button>
          <h1>{colour}</h1>
          <h1>{height}</h1>
          <h1>{width}</h1>
        </div>
    </div>
  )
}

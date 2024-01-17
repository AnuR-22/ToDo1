import React from "react";
export default function Calc(){
    const plus=()=>alert("pluse button is clicked");
    const minus=()=>alert("minus button is clicked");
    let str="RKST";
    let str1="Anu";
    return(
      <div>
        <input type="text" placeholder="enter the city"/>
      <br/>
      <p>{str}</p>
      <p>{str1}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      </div>
    )
}
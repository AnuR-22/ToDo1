import React,{useState}from "react";


export default function IncDec()
{
    const[num,setNum]=useState(0);
    const inc=()=>setNum(num+1);
    const dec=()=>setNum(num-1);
    
    return(
        <div className='incdec'>
            <p>{num}</p>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
           <button onClick={()=>document.body.style.backgroundColor='red'}>click </button>
        </div>
    );
}
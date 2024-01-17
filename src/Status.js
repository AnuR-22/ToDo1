import React, { useState } from 'react'

export default function Status(){
    const[status,setstatus]=useState(false);
    return(
        <div>
            {status ?<h1>Hello World</h1>:null}
            <button onClick={()=>setstatus(true)}>show</button>
            <button onClick={()=>setstatus(false)}>hide</button>
            <button onClick={()=>setstatus(!status)}>toggle</button>
           
        </div>

    );
}
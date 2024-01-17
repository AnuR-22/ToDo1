import React, { useState } from 'react'


function Show() {
    const[x,setX]=useState(10);
    const show=(x)=>{
      console.log('running')
    setX(10)}
  return (
    <div>
        <button onClick={()=>show()}>+</button>
    </div>
  )
}

export default Show
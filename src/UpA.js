import React from 'react'

export default function upA(props) {
  let height=200;
  let width=150;
  return (
<div>
<button onClick={()=>props.show(height,width)}>click</button>
</div>
    
  )
}
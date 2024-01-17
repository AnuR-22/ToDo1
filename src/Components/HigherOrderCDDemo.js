import React, { useState } from 'react'

//higher order component
export default function HigherOrderCDDemo() {
    
    function Counter(){
        const[count,setCount]=useState(0)
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>

    )
    }
    function HOCRed(props){
         return(
            <h1 style={{backgroundColor:'red'}}>Red Counter
            <props.cmp/>
            </h1>
         )
    }
    function HOCBlue(props){
        return(
           <h1 style={{backgroundColor:'blue'}}>Blue Counter
           <props.cmp/>
           </h1>
        )
   }

  return (
    <div>
        <HOCRed cmp={Counter}/>
        <HOCBlue cmp={Counter}/>
    </div>
  )
}

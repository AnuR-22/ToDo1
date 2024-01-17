import React, { useMemo, useState } from 'react'

export default function UseMemoDemo() {
    const[count,setCount]=useState(10)
    const[item,setItem]=useState(50)


    //
    const show2=useMemo(
        function show(){
        console.log("this is shown")
        return count*2
    },[count])
  return (

    <div>
        <h1>{show2}</h1>
        <p>Count:{count}</p>
        <p>Item:{item}</p>
        <button onClick={()=>setCount(count+1)}>click on change count</button>
        <button onClick={()=>setItem(item+1)}>click on change item</button>

    </div>
  )
}

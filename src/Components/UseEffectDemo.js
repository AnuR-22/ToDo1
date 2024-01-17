import React,{useEffect,useState}from 'react'

export default function UseEffectDemo(){
    const[count,setCount]=useState(0)
    const[item,setItem]=useState(100)
    useEffect(()=>{
        console.log("use effect 1 called...")
    },[])
    useEffect(()=>{
        console.log("use effect 2 called...")
    },[count,item])
    return(
        <div>
            <h1>Count is:{count}</h1>
            <h1>Item is:{item}</h1>
            <button onClick={()=>setCount(count+1)}>Count Change</button>
            <button onClick={()=>setItem(item+1)}>Item Change</button>
        </div>

    )
}
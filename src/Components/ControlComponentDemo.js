import React, { useState } from 'react'

export default function ControlComponentDemo() {
    const[val,setVal]=useState('Anu')
    const handleChange=(e)=>{
        e.preventDefault()
        setVal((e.target.value)
        .toUpperCase())
        console.log(val)
    }
  return (
    <div>
        <form>
            <p>{val}</p>
            <input type="text" onChange={handleChange}/>
        </form>
    </div>
  )
}

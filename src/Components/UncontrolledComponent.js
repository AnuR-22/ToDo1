import React, { useRef } from 'react'

export default function UncontrolledComponent() {
    const myref=useRef()
    const myref2=useRef()

    function handleChange(e){
         e.preventDefault()
         console.log(myref.current.value.toUpperCase())
         myref2.current.style.backgroundColor='red'
    }
  return (
    <div>
        <form onSubmit={handleChange}>
           <input type="text" defaultValue='John' ref={myref}/>
           <button type='submit' ref={myref2}>submit</button>
        </form>
    </div>
  )
}

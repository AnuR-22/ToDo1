import React from 'react'

export default function Child(props) {
    let name="Anu R"
  return (
    <div><h1>Name in Child{name}</h1>
    <button onClick={()=>props.show(name)}>click</button>
    </div>
  )
}

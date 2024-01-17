import React, { useState } from 'react'

export default function Student(props) {
  // const [x,y]=useState(props.person);
  // console.log("hi",props.person)
  return (
    <div style={{backgroundColor:'greenyellow',textAlign:'center'}}>
      <h2>{props.name}</h2>
      <h2>{props.email}</h2>
      {/* <h2>{props.person.name}</h2> */}
      </div>
  )
}

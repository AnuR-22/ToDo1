
import React, { createContext, useContext, useState } from 'react'

const UserContext=createContext();
function Ownpracties() {
  const[user,setUser]=useState("Anu R")

  return (
    <UserContext.Provider value={user}>
      <ht>Hello {user}!</ht>
      <Component2/>
    </UserContext.Provider>
  )
}

function  Component2(){
  return(
    <>
    <h1>Component2</h1>
    <Component3/>
    </>
  )
}
function  Component3(){
  return(
    <>
    <h1>Component3</h1>
    <Component4/>
    </>
  )
}
function  Component4(){
  const user=useContext(UserContext);
  return(
    <>
    <h1>Component4</h1>
    <h2>Hello {user}again!</h2>
    </>
  )
}

export default Ownpracties
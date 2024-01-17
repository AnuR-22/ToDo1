import React from 'react'
import{
    BrowserRouter as Router,
    Switch,Route,useParams
}from "react-router-dom"


export default function Blogpost1() {
    let{id}=useParams();
  return (
    <div>Blogpost1</div>
  )
} 

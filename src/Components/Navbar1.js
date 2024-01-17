import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar1() {
  return (
    <div>
        Navbar1
        <ul>
            <li>
                <Link to={"/page/:id"} >BlogsPost</Link>
                </li>
            <li>
                <Link to={"/about"} >About</Link>
                </li>
            
        </ul>
        </div>
    
  )
}

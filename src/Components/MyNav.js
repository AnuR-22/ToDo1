 import React from 'react'
 import {Link} from 'react-router-dom'
    
 export default function MyNav(){
    return(
        <div>
             {/* <a href='/'>Home</a>
            <br/>
            <a href='a1'>AxiosDemo</a> */}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/a1">Header</Link> </li>
                <li><Link to="/page/:id">BlogsPost</Link></li>
            </ul>
        </div> 
        
    )
 }
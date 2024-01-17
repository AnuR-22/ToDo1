import React from 'react'
import{useParams} from "react-router-dom";

export default function BlogsPost(){
    let{id}=useParams();
    return (
        <div style={{fontSize:"50px"}}>Now showing post{id}</div>
    )
}
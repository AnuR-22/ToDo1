import axios  from 'axios'
import React,{useEffect,useState} from 'react'

export default function AxiosDemo() {
    const[myData,setMydata]=useState();
    useEffect(()=>
    {
        axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((resp)=>{
            setMydata(resp.data)
            
        },[])
    }
    
    )
  return (
    
    <div>
        <h1>AxiosDemo</h1>
        {
            myData && myData.map((d)=>{
             return(
                <li>{d.email}</li>)
             
            }) 
            }
        </div>
  )
}

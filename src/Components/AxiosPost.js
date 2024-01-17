import axios from 'axios'
import React,{useEffect} from 'react'

export default function AxiosPost(){
    const mydata={
        "id":100,
        "Name":"some comments",
        "address":5
    }
    const putData=async()=>{
        const resp=await axios.post('http://localhost:5004/students')
        console.log(resp)
    }
    return(
        <div>
            <button onClick={()=>putData()}>click to add data</button>
        </div>
    )
}
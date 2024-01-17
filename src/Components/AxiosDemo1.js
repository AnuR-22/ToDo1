import axios from 'axios'
import React,{useEffect,useState} from 'react'

export default function AxiosDemo1(){
const[myData,setMydata]=useState();
const getData=async()=>{
    const resp=await axios.get('http://localhost:5004/students')
    setMydata(resp.data.items);
}
return(
    <div>
        <button onClick={getData}>click</button>
    </div>
)

}
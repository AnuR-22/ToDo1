import{useState}from "react";
export default function InputBox(){
    const[data,setData]=useState(" ");
    const[print,setprint]=useState(false);
    function getdata(e){
        console.log(e.target.value);
        setData(e.target.value);
    }
    return(
        <div >
           <input type="text" onChange={getdata}/>
           {print ?<h1>{data}</h1>:null}
           <button onClick={()=>setprint(true)}>click me </button>
           <h1>{data}</h1>
        </div>

    )
}
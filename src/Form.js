import React,{ useState } from "react"


export default function Form(){
    const[name,setname]=useState("");
    const[tnc,setTnc]=useState(false);
    const[interest,setInterest]=useState("");
    function getFormData(e){
        console.warn(name,tnc,interest)
        e.preventDefault()
    }
    return(
        <div className="App">
          <h1>Handle the form</h1>
          <form onSubmit={getFormData}>
            <input type="text" onChange={(e)=>setname(e.target.value)}/>
            <br></br>
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option>select option</option>
                <option>spidermen</option>
                <option>iron man</option>
            </select><br></br>
            <input type="checkbox" onChange={(e)=>setTnc(e.target.value)}  name='' id=''/>
            <span>Accept terms and condition</span>
            <br></br>
            <button type="submit">Submit</button>
            <button>clear</button>

          </form>
        </div>

    )

}
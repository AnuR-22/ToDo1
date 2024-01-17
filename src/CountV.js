import React,{ useState } from "react";

export default function CountV(){
    const[nov,incVowels]=useState(0 );
    const[noc,incConsonents]=useState( 0);
    const[data,setData]=useState()
  const getData=(e)=>setData(e.target.value)
  const countData=()=>{
    let x=0,y=0;
    for(let i=0;i<data.length;i++){

        console.log(data[i])
        if(data[i]=='A'||data[i]=='E'||data[i]=='I'
        ||data[i]=='O'||data[i]=='U')
           {
            x++;
           }else{
            y++;
           }
    }
    incVowels(x)
    incConsonents(y)

  }
    return(
        <div>
            <input type="text" onChange={getData}/>
            <br/>
           
            <p>No of vowels{nov}</p>
            <p>no of consonents{noc}</p>
            <button onClick={countData}>count</button>

        </div>
    )
}
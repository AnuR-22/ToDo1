import React, { useState } from "react";
export default function Practies(){
  const[nov,setVowels]=useState(0);
  const[noc,setConsonent]=useState(0);
  const[data,setdata]=useState();
  const getdata=(e)=>setdata(e.target.value);
  const countdata=()=>{
    let x=0,y=0;
    for(let i=0;i<data.length;i++){
console.log(data[i]);
        if(data[i]=='a'||data[i]=='e'||data[i]=='i'||data[i]=='o'||data[i]=='u'){
            x++;
        }else{
            y++;
        }
    }
    setVowels(x);
    setConsonent(y);
  }
  
    return(
        <div>
            <input type="text" onChange={getdata}/>
   <p>no of Vowels{nov}</p>
   <p>no of consonent{noc}</p>
   <button onClick={countdata}>count click</button>
        </div>
    )

}

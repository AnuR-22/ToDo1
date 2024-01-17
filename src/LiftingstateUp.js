import React,{useState} from 'react'
import UpA from "./UpA";
import UpB from "./UpB";

export let UserContext=React.createContext();

export default function LiftingstateUp() {
  const[height,setHeight]=useState();
  const[width,setWidth]=useState();
    const[colour,setColour]=useState("red" );
    const show=(height,width)=>{
      console.log(height,width);
      setHeight(height);
      setWidth(width);
      
      }
  
    return (
        <UserContext.Provider value={{colour,height,width}}>
      <div>
             
              <h1>height and width is:{height} {width}</h1>
            <UpA show={show}/>
            <UpB/>
            
            </div>
            </UserContext.Provider>
      )
  
}

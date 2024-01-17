import React,{ useState} from 'react'
import ChildA from "./ChildA";

 export let context=React.createContext();
 export default function Parent(){
    const[fName,setfName]=useState("firstname");
    const[lName,setlName]=useState("lastname");
    return(
        <context.Provider value={{fName,lName}}>
        
        <div>
            This is a Parent Component
        </div>
        <br/>
        <ChildA/>
        </context.Provider>
        
    );
}

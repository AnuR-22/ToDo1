import React,{useContext,Context}from 'react'
import{context} from './Parent';

export default function ChildC(){
    const[fName,lName]=useContext(context);
    return(
        <>
            This is ChildC Component
        <br/>
        <h3>Data from parent Component is followes</h3>
        <h4>{fName}</h4>
        <h4>{lName}</h4>
        </>
    );
}
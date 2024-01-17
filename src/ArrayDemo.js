import React from 'react'

export default function ArrayDemo(){
    const names=['Anil','Ranju','Aaravi']
    // const x=names.map((n)=>
    // <h1>{n}</h1>)
    const cars=[
        {name:'A',model:'xyz',price:10},
        {name:'B',model:'xyz',price:40},
        {name:'C',model:'xyz',price:50},
        
    ];
    cars.map((c)=>console.log(c))
return(
        // <div>
        //     {x}
        // </div>
        <div>
            {
                cars.map((data)=>
                <h2>Name of car:{data.name} <br/>
                Model of car:{data.model} <br/>
                Price of car:{data.price}</h2>
                
             )
            }
        </div>
        )
    
}
import React from 'react'

export default function PropsDemo(props) {
  return (
    <div >
        <span className='mydiv' id="s"></span>
        <button onClick={()=>
                document.getElementById("s")
                .style.backgroundColor
                    =props.myclr
        }>Click </button>
    </div>
  )
}

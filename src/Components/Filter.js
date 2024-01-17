import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Filter() {
    const[serparam,setSearchparam]=useSearchParams()
    
    const x=serparam.get('age')
    const y=serparam.get('city')
    return (

    <div>
        age is x
        <br/>
        city is y
        </div>
  )
}

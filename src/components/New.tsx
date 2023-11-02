"use client"
import React, { useState } from 'react'

const New = () => {
  const [input, setInput] = useState("")
  return (
    <div>
        <p>ADD NEW TODOS HERE</p>
        <input type="text" 
              onChange={(e)=>setInput(e.target.value)}   
              className='bg-slate-500'/>
    </div>
  )
}

export default New

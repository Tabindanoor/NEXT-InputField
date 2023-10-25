"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [input, setInput] = useState("")
  const handleChange=(e:any)=>{
    setInput(e.target.value)
  }
  const handleSubmit=(e:any)=>{
    e.preventDefault()
  }
  return (
   <div className='items-center'>
      <p className='bg-green-400 text-center p-3'>My name is Tabinda Noor</p>
      
        <br />
      <div>
      <form className='text-center ' onSubmit={(e)=>handleSubmit(e)}>

          <input type="text" 
                  onChange={(e)=>handleChange(e)} 
                 value={input} 
                 placeholder='enter your name here ' 
                 className='p-3 bg-slate-300 rounded-lg text-gray-700'  />


          <button className='text-center justify-center p-3 bg-purple-200 rounded-lg text-green-700 ' type="submit">Predict</button>   
      </form>
      </div>
      
   </div>
  )
}

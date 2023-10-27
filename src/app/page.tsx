"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('')

  const handleChange=(e:any)=>{
    setName(e.target.value)
    console.log(e.target.value)
  }
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    router.push(`/prediction/${name}`)

  }
  return (
   <div className='items-center'>
      <p className='bg-green-400 text-center p-3'>My name is Tabinda Noor</p>
      
        <br />
      <div>
      <form className='text-center ' onSubmit={(e)=>handleSubmit(e)}>

          <input type="text" 
                  onChange={(e)=>handleChange(e)} 
                 value={name} 
                 placeholder='enter your name here ' 
                 className='p-3 bg-slate-300 rounded-lg text-gray-700'  />


          <button className='text-center justify-center p-3 bg-purple-200 rounded-lg text-green-700 ' type="submit">Predict</button>   
      </form>
      </div>
      
   </div>
  )
}

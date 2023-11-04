import New from '@/components/New'
import React from 'react'
import { Route } from 'next'
import Router from 'next/router'
import Link from 'next/link'
const page = () => {
  let todo =[{title:"x"},{title:"s"},{title:"z"}]
  return (
    <div>
      <p>Here appear all the todos </p>
      <p>Todo list using prisma </p>

      <Link href={"/"} >Create New Todo</Link>

      <div className=''>        
{
  todo.map((data,id)=>{
    return(
      <div key={id} className='flex'>
        
        <input 
        type="checkbox" 
        name="" 
        id="" 
        className='peer-disabled:'
         />
        <p>{data.title} </p>
      </div>
    )
  })
}
        {/* <p>Here is the todo</p> */}
      </div>
    </div>
  )
}

export default page

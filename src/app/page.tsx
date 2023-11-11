import { prisma } from '@/db'
import { Prisma } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import { title } from 'process'

export default async function  Home() {
  const todos = await prisma.todo.create({data: {title: 'test',complete:false}})
  // const todos = await prisma.todo.findMany()
  // console.log(todos,"hehe")
  // console.log(todos,"hehe")
  // console.log(todos,"hehe")
  return (
  <div className='text-center text-white p-4'>
   <div className='justify-between text-center flex '>
    <p className='text-2xl'>All todos</p>
    <Link  href="/new" className='p-2  border-slate-400 border rounded-2xl text-xl'>New</Link>
   </div>
 
    <div>
      {todos.map((todo)=>{
  <ul key={todo.id}>
    
    <li>
      <input type="checkbox" name="title" id="" />
      {title}</li>

    
  </ul>
})}
    </div>


  
  </div>
  )
}
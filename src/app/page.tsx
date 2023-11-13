import TodoItem from '@/components/TodoItem'
import { prisma } from '@/db'
import { Prisma } from '@prisma/client'
import { strict } from 'assert'
import Image from 'next/image'
import Link from 'next/link'
import { title } from 'process'

export default async function  Home() {
  // const todos = await prisma.todo.create({data: {title: 'test',complete:false}})
  const todoos = await prisma.todo.findMany()
 
  const handleChange=async(id:string,complete:boolean)=>{ 
    "use server "
    console.log(id,complete)
    prisma.todo.update({where: {id},data: {complete}})
  }
  return (
  <div className='text-center text-white p-4'>
   <div className='justify-between text-center flex '>
    <p className='text-2xl'>All todos</p>
    <Link  href="/new" className='p-2  border-slate-400 border rounded-2xl text-xl'>
      New
    </Link>
    
   </div>
   {/* {JSON.stringify(todoos)} */}
    <div> 
      {todoos.map((todo)=>{
        return(
            <TodoItem key={todo.id} {...todo} handleChange={handleChange} />
        )
    })}

    </div>
   </div>

  )
}
import TodoItem from "@/components/TodoItem"
import { prisma } from "@/db"
import Link from "next/link"

// const FindTodo=async()=>{
//   await prisma.todo.findMany()
// }



const page =async () => {

 const myTitle =  await prisma.todo.findMany() 

  // const myTitle = FindTodo();
  console.log(myTitle
    )

  const toggleTodo = async (id:string,complete:boolean) =>{
    "use server"
   
      await prisma.todo.update({where:{id},data:{complete}})
     
  }
  return (
    <div className="text-white">



      <div className="flex  justify-between p-2">
        <h1 className="title">Welcome to the React App!</h1>
        <Link href="./new"  className="border rounded-lg border-gray-300 p-2">New</Link>
      </div>
      <h1>Here&apos;s my todo list </h1>
      {
        myTitle.map((todo)=>{
          return(
               <TodoItem key={todo.id} {...todo}  toggleTodo={toggleTodo} />

          )
        })
      }
    </div>
  )
}

export default page
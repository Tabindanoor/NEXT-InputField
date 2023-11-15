import { prisma } from "@/db"

// const FindTodo=async()=>{
//   await prisma.todo.findMany()
// }

const page =async () => {
//  prisma.todo.create({data:{:"bwebfbegb",complete:false}})
//  const myTitle =  await prisma.todo.findMany() 

  // const myTitle = FindTodo();
  // console.log(myTitle,"hehe")

  return (
    <div className="text-white">



      <div className="flex  justify-between p-2">
        <h1 className="title">Welcome to the React App!</h1>
        <button type="button"  className="border rounded-lg border-gray-300 p-2">Button</button>
      </div>
      <h1>Here&apos;s my todo list </h1>
      {/* {JSON.stringify(myTitle)} */}
      {/* {
        myTitle.map((todo)=>{
          <li>{title}</li>
        })
      } */}
    </div>
  )
}

export default page
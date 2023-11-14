import { prisma } from "@/db"


const page = () => {
  const mydata = prisma.todo.create({data})
  // const myTitle = prisma.todo.findMany()

  return (
    <div className="text-white">
      <div className="flex  justify-between p-2">
        <h1 className="title">Welcome to the React App!</h1>
        <button type="button"  className="border rounded-lg border-gray-300 p-2">Button</button>
      </div>
      <h1>Here&apos;s my todo list </h1>
      {/* {
        todos.map((todo)=>{
          <li>{title}</li>
        })
      } */}
    </div>
  )
}

export default page
import { prisma } from "@/db"
import { redirect } from "next/navigation"
import Link from "next/link"


const handleSubmit=async(data:FormData)=>{
  "use server"
 const mytitle =  data.get("title")?.valueOf()
 console.log(mytitle)
 if( typeof mytitle !== "string" || mytitle.length === null)
 {
    throw new Error("Enter valid Data please .....!")
 }
 
  await prisma.todo.create({data:{title:mytitle, complete:false}})
  redirect("/")

}

const page = () => {

  
  return (
    <div className=" text-center justify-center  flex mt-4"> 
      <div>
        <form action={handleSubmit} method="get">
          <input type="text" name="title" id="title" />
          <div className="flex gap-2 text-center justify-end  text-white">
              <Link href=".." className="p-2 border rounded-lg mt-4">Cancel</Link>
              <button type="submit" className="p-2 border rounded-lg mt-4" >Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page
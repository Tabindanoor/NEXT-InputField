"use client"
type myData ={
  id: string
  title: string
  complete:boolean
  toggleTodo:(id:string,complete:boolean)=>void
 
}

const TodoItem = ({id, title, complete,toggleTodo}:myData) => {
  return (
    <div>
      <div className="flex">
        <input type="checkbox"
               name={id} id={id}  
               className="peer cursor-pointer"
              defaultChecked={complete}
              onChange={(e)=>toggleTodo(id,e.target.checked)} />
          
        <p className="peer-checked:line-through peer-checked:text-gray-500 cursor-pointer">{title}</p>
      </div>
      
    </div>
  )
}

export default TodoItem
"use client"

type TodoTypes ={
  id: string
  complete: boolean
  title: string
  handleChange: (id:string,complete:boolean) => void
}

const TodoItem = ({id,complete,title,handleChange}:TodoTypes) => {
  return (
    <div className='flex '>
      <input 
      type="checkbox" 
      name="title" 
      id={id} 
      defaultChecked={complete}
      className='peer cursor-pointer'  
      onChange={e=>handleChange(id,e.target.checked)} />

      <label htmlFor={id} className='peer-checked:line-through peer-checked:text-gray-500 cursor-pointer'>
         {title}
      </label>
      
    </div>
  )
}

export default TodoItem
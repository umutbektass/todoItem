import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { useState } from 'react'
import { addTodo } from '../redux/todos/todoSlice'
import { nanoid } from 'nanoid'

function Form() {
  const items = useSelector(state=>state.todos.items)
  localStorage.setItem("task",JSON.stringify(items))
  const dispatch = useDispatch()
  const [title,setTitle]=useState("")
  const [error,setError]=useState("")
  const [errorSiutation,setErrorSiutation]=useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault()
   const titleTrim= title.trim()
    if(titleTrim.length ==0){
      return setError("Lütfen değer giriniz."), setErrorSiutation(true)
    }
    dispatch(addTodo({
      "id":nanoid(),"title":title,"complated":false
    }))
    setTitle("")
  }
  
  if(errorSiutation){
    setTimeout(() => setErrorSiutation(false),3000)
  }
    
  
  
  return (
    <div>
      {
        errorSiutation ?<p className="alert alert-danger text-dark">{error}</p>:""
      }
      
        <form onSubmit={handleSubmit}>
    <input value={title} className="new-todo formfield" placeholder="What needs to be done?" autoFocus  onChange={e=>setTitle(e.target.value)}/>
        </form>
</div>
  )
}

export default Form
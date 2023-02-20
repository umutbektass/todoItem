import React,{useEffect} from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { toggle ,deleteItem} from '../redux/todos/todoSlice'



function Todolist() {
	

	const todoItem=useSelector(state=>state.todos.items)
	const isLoading = useSelector(state=>state.todos.isLoading)
	console.log(isLoading)
	const dispatch = useDispatch()
	const handleDestory = (id)=>{
		if(window.confirm("Silmek istediğinizden emin misiniz ? ")){
			dispatch(deleteItem(id))
		}
	
	}
	const activeFilter = useSelector(state=>state.todos.activeFilter)
	let filtered = []

	
	 useEffect(()=>{
	 	setTimeout(() =>todoItem.map((item)=>(
			item.title
		)) , 1000);
	 },[])
	

    if(activeFilter==="All"){
        filtered = todoItem
    }
    else if(activeFilter==="Active"){
        filtered = todoItem.filter(item=> item.complated===false)
    }
    else if(activeFilter==="Complated"){
        filtered= todoItem.filter(item=>item.complated==true)
    }
	
  return (
    <div>	
        <ul className="todo-list">
			{ 
				filtered.map(item=>(
					<li key={item.id} className={item.complated ? "completed" : ""}>
				<div className="view">
					<input className="toggle" type="checkbox" onChange={()=>dispatch(toggle(item.id))} />
					<label>{item.title}</label>
					<button className="destroy" onClick={()=>handleDestory(item.id)}></button>
				</div>
			</li>
			

				))
			} 
			
			</ul>
		
    </div>
  )
}

export default Todolist
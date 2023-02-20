import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { secimDegistir ,clearComplated} from '../redux/todos/todoSlice'

function ContentFooter() {
    const items = useSelector(state=>state.todos.items)
    const dispatch = useDispatch()
    const activeFilter = useSelector(state=>state.todos.activeFilter)
    
    
  return (
   
        <div style={{height:"50px"}}>
            <footer className="footer">
            <span className="todo-count">
                <strong>{items.length + " "}</strong>
                item{items.length>1 ? "s":""} left
            </span>
            <ul className="filters">
                <li>
                    <a className={activeFilter==="All" ? "selected":""} onClick={()=>dispatch(secimDegistir("All"))}>All</a>
                </li>
                <li>
                    <a className={activeFilter==="Active" ? "selected":""} onClick={()=>dispatch(secimDegistir("Active"))}>Active</a>
                </li>
                <li>
                    <a className={activeFilter==="Complated" ? "selected":""} onClick={()=>dispatch(secimDegistir("Complated"))}>Complated</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={()=>dispatch(clearComplated())}>Clear complated</button>
        </footer>
    
        </div>
  )
}

export default ContentFooter
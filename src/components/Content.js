import React from 'react'
import Todolist from './Todolist'
import ContentFooter from './ContentFooter'

function Content() {
  return (
    <div>
        <section className="main">
		<input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>
		<Todolist></Todolist>
        
	</section>
    <ContentFooter></ContentFooter>
    </div>
  )
}

export default Content
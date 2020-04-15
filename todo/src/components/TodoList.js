import React from 'react'
import TodoCard from './TodoCard'

function TodoList (props) {


    return(
        <div>
            {props.todos.map(item => {
                return <TodoCard item= {item} toggle={props.toggle}/>
            })}
            <button onClick={props.clearTask}>Clear</button>
        </div>
    )
}
export default TodoList
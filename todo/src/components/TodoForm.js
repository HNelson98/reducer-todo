import React, { useState, useReducer } from 'react'; 



const TodoForm =
    props => {
        
        const [taskInput, setTaskInput] = useState('')

        const taskSubmit = event => {
            event.preventDefault();
            props.addTask(taskInput)
            setTaskInput("")
        }

       

        const inputChange = event => {
            // console.log(event)
            event.preventDefault();
            setTaskInput(event.target.value)
        }

        return (
            <div>
                <form >
                    <input type="text"
                        value={taskInput}
                        name="taskInput"
                        onChange={inputChange}
                    />
                    <button onClick={(event) => { taskSubmit(event) }}>Add Todo</button>
                    
                </form>
            </div>

        )

    }

    export default TodoForm
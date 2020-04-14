import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'
import { reducer, initialList } from './reducers/reducer'

function App() {
  const [state, dispatch] = useReducer(reducer, initialList);

  function toggle(id){
    dispatch({type:"TOGGLE_TASK", payload:id})
  }

  function addTask(task){
    const newTask = {
      item: task,
      completed: false,
      id: Date.now()
    }

    dispatch({type: "ADD_TASK", payload: newTask})
  }

  function clearTask(){
    dispatch({type: "REMOVE_TASK"})
  }
  return (
    <div className="App">
     
       
        <TodoForm  addTask={addTask}/>
       <TodoList todos= {state.todo} clearTask={clearTask} toggle={toggle}/>
    </div>
  );
}

export default App;

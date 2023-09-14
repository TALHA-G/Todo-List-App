import React, { useState } from 'react';
import "./Ap.css";

function Ap() {
  
 
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  
 
  return (
    <>
    <div className="container">
      <div className="list">

        <div className="head">
           <h2>To Do-List</h2>
           <img src="../img/icon.png" alt="logo" />
        </div>

          <div className="row">
           <input type="text" id='input-box' placeholder='Add your text'
            value={task}
           onChange={(e) => setTask(e.target.value)}/>

            <button onClick={addTask}>Add</button>
          </div>
            
            <ul id ='list-task'>
             {todos.map((todo, index) => (
             <li key={index}>
               {todo}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
       <div className="create">
        <h2>Created By: <br/> M Talha Gulzar</h2>
       </div>
          
     </div>
     
     </>
  )
}

export default Ap;
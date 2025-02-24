import { useState, useEffect } from "react";
import axios from "axios";

import "./Tasks.scss";

import TaskItem from "./TaskItem"

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () =>{
    try {
      const {data} = await axios.get('http://localhost:8000/tasks');
      console.log(data);
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect( () =>{
    getTasks();
  },[])
  
  return (
    <div className="tasks-container">
      <h2>Minhas tarefas</h2>

      <div className="last-tasks">
        <h3>Últimas tarefas</h3>
        <div className="task-list">
          {tasks
                .filter( (task) => task.isCompleted == false)
                .map( lastTask => (
                  <TaskItem key={lastTask._id} task={lastTask} />
                ))
          }
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas concluídas</h3>
        <div className="task-list">
          {tasks
          .filter( task => task.isCompleted)
          .map(task => (
            <TaskItem key={task._id} task={task} />
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Tasks
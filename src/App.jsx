import { useEffect, useState } from "react"
import axios from"axios";

import TaskItem from "./components/TaskItem"


function App() {
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
    <>
      {tasks.map( task => (
        <TaskItem key={task._id} description={task.description} isCompleted={task.isCompleted} />
      ))}
    </>
  )
}

export default App

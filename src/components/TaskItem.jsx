import "./TaskItem.scss"

import {AiFillDelete} from "react-icons/ai"
import axios from "axios";
import { toast } from 'react-toastify';

const TaskItem = ({ task, getTasks}) => {
  
  const handleTaskDeletion = async () => {
    try {
        await axios.delete(`http://localhost:8000/tasks/${task._id}`)
        await getTasks();
        toast.success("Tarefa deletada com sucesso", {
          position: 'bottom-right',
        }) 
    } catch (error) {
      toast.error("Erro ao deletar tarefa", {
        position: 'bottom-right',
      }) 
    }
  }

  const handleTaskCompletedChange = async (e) =>{
    try {
      await axios.patch(`http://localhost:8000/tasks/${task._id}`, {
        isCompleted: e.target.checked
      });

      await getTasks();

      toast.success("A tarefa foi modificada com sucesso", {
        position: 'bottom-right',
      })

    } catch (error) {
      toast.error("Algo deu errado", {
        position: "bottom-right"
      })
    }
  }
  return (
    <div className='task-item-container'>
      <div className='task-description'>
        <label className={task.isCompleted? "checkbox-container-completed" : "checkbox-container"}>
          {task.description}
          <input type="checkbox" defaultChecked={task.isCompleted} onChange={e => handleTaskCompletedChange(e)}/>
          <span className={task.isCompleted? "checkmark completed" : "checkmark"}></span>
        </label>
      </div>

      <div className='delete'>
        <AiFillDelete size={18} color="#f97474" onClick={handleTaskDeletion}/>
      </div>
    </div>
  )
}

export default TaskItem
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import "./AddTask.scss";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const AddTask = ({getTasks}) => {
    const [task, setTask] = useState("");

    const mudanca = (e) => {
        setTask(e.target.value);
    }

    const handleTaskAddition = async() => {

      try {
        if(task.length == 0){
          throw new Error("Preencher o campo de mensagem")
        }

        const data = {
          description: task,
          isCompleted: false
        }
      
        const response = await axios.post(`http://localhost:8000/tasks`, data);
        setTask("");
        await getTasks();
        toast.success('Tarefa cadastrada com sucesso!', {
          position: 'bottom-right',
        }) 
      } catch (error) {
        toast.error(error.message || "Erro ao inserir tarefa", {
          position: 'bottom-right',
        }) 
      }
    }
  return (
    <div className="add-task-container">
        <CustomInput label="Adicionar tarefa ..." value={task} onChange={mudanca} />
        <CustomButton>
          <FaPlus size={14} color="#ffffff" onClick={handleTaskAddition}/>
        </CustomButton>
    </div>
  )
}

export default AddTask
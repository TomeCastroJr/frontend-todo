import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import "./AddTask.scss";


import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const AddTask = () => {
    const [task, setTask] = useState("");

    const mudanca = (e) => {
        setTask(e.target.value);
    }
  return (
    <div className="add-task-container">
        <CustomInput label="Adicionar tarefa ..." value={task} onChange={mudanca} />
        <CustomButton>
          <FaPlus size={14} color="#ffffff"/>
        </CustomButton>
    </div>
  )
}

export default AddTask
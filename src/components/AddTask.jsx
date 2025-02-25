import { useState } from "react";
import "./AddTask.scss";
import CustomInput from "./CustomInput";

const AddTask = () => {
    const [task, setTask] = useState("");

    const mudanca = (e) => {
        setTask(e.target.value);
    }
  return (
    <div className="add-task-container">
        <CustomInput label="Adicionar tarefa ..." value={task} onChange={mudanca} />
    </div>
  )
}

export default AddTask
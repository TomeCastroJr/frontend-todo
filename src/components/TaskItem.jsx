import React from 'react'

const TaskItem = ({task}) => {
  return (
    <div>
        <p>{task.description}</p>
        <p>Status: {task.isCompleted ? "Concluído" : "Pendente"}</p>
    </div>
  )
}

export default TaskItem
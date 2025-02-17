import React from 'react'

const TaskItem = ({description, isCompleted}) => {
  return (
    <div>
        {description}<br></br>
        {isCompleted? "completada": "Não completada"}
    </div>
  )
}

export default TaskItem
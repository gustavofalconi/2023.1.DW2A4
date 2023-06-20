import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`);
  };

  const confirmTaskDeletion = () => {
    const confirmMessage = `Tem certeza que deseja excluir a tarefa "${task.title}"?`;
    if (window.confirm(confirmMessage)) {
      handleTaskDeletion(task.id);
    }
  };

  return (
    <div className="task-container" style={task.completed ? { borderLeft: "6px solid rgb(66, 141, 255)" } : {}}>

      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">

        <button className="remove-task-button" onClick={confirmTaskDeletion}>
          <CgClose />
        </button>

        <button className="see-task-details-button" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Task;

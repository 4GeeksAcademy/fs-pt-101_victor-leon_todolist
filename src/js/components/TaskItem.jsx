import React from 'react';
import '../../styles/index.css';

const TaskItem = ({ task, deleteTask }) => {
  return (
    <li className="task-item">
      <span>{task.text}</span>
      <button className="delete-button" onClick={() => deleteTask(task.id)}>
        &#x2715;
      </button>
    </li>
  );
};

export default TaskItem;

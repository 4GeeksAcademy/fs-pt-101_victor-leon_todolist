import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask }) => {
  if (tasks.length === 0) {
    return <p>No hay tareas</p>;
  }

  return (
    <div>
      <p>Total de tareas: {tasks.length}</p>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: taskText }]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default TaskApp;

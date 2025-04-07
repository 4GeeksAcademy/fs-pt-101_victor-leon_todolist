import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask(input);
      setInput('');
    }
  };

  return (
    <input
      type="text"
      placeholder="Añadir..."
      value={input}
      onChange={e => setInput(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default TaskInput;

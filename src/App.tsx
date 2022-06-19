import React, { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';

const App = () => {
  const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
};

export default App;

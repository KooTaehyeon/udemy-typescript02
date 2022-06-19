import React, { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewToddo from './components/NewToddo';
const App = () => {
  const [todos, setTodos] = useState<Todo[]>([new Todo('Learn React')]);
  const addTodos = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const RemoveTodo = (id: string) => {
    setTodos((prveTodos) => {
      return prveTodos.filter((item) => id !== item.id);
    });
  };

  return (
    <div>
      <NewToddo onAddTodo={addTodos} />
      <Todos items={todos} onRemoveTodo={RemoveTodo} />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import Todo from '../models/todo';

export type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProver: React.FC<{ children: React.ReactNode }> = (props) => {
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

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodos,
    removeTodo: RemoveTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProver;

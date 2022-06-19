import React, { useContext, useRef } from 'react';
import { TodosContext } from '../store/todos-context';
import styles from './NewTodo.module.css';
const NewToddo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    let enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <label htmlFor='text'>Todo Text</label>
      <input type={'text'} id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewToddo;

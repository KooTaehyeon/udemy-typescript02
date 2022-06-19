import React from 'react';

const NewToddo: React.FC = (props) => {
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor='text'>Todo Text</label>
      <input type={'text'} id='text' />
      <button>Add Todo</button>
    </form>
  );
};
export default NewToddo;

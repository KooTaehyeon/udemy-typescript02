import React, { useState } from 'react';
import Todos from './components/Todos';

const App = () => {
  const [items, setItems] = useState(['Learn React,', 'Learn TypeScript']);

  return (
    <div>
      <Todos items={items} />
    </div>
  );
};

export default App;

import Todos from './components/Todos';
import NewToddo from './components/NewToddo';
import TodosContextProver from './store/todos-context';
const App = () => {
  return (
    <div>
      <TodosContextProver>
        <NewToddo />
        <Todos />
      </TodosContextProver>
    </div>
  );
};

export default App;

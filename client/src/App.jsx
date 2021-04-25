import './App.css';
import EntryForm from './components/EntryForm';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="m-5">TODO app</h1>
      <div className="row">
        <div className="col-xl-6">
            <EntryForm></EntryForm>
        </div>
        <div className="col-xl-6">
          <TodoList></TodoList>
        </div>
      </div>

    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FrontPage from './pages/FrontPage';
import CreateTodoPage from './pages/CreateTodoPage';
import CreateTodosPage from './pages/CreateTodosPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <FrontPage></FrontPage>
        </Route>
        <Route exact path="/todo/create">
          <CreateTodoPage></CreateTodoPage>
        </Route>
        <Route exact path="/todo/create/multiple">
          <CreateTodosPage></CreateTodosPage>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

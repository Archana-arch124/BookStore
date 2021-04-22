import './App.css';
import SignUp from './Pages/Signup/signUp';
import Login from './Pages/Login/login';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          <Redirect path="/" to="/Login"  exact />
          <Route path="/Dashboard" component={Dashboard} ></Route>
          <Route path="/SignUp" component={SignUp} exact />
          <Route path="/Login" component={Login} exact />
        </Switch>
      </BrowserRouter > 
    </div>
  );
}

export default App;

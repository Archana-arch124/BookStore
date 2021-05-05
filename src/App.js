import './App.css';
import SignUp from './Pages/Signup/signUp';
import Login from './Pages/Login/login';
import {  BrowserRouter as Router,Redirect, Route, Switch } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/dashboard';
import store from './Redux/store.js';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
         <Provider store={store}>
         <Router>
          <Switch>
          <Redirect path="/" to="/Login"  exact />
          <Route path="/Dashboard" component={Dashboard} ></Route>
          <Route path="/SignUp" component={SignUp} exact />
          <Route path="/Login" component={Login} exact />
        </Switch>
        </Router>
        </Provider>
    </div>
  );
}

export default App;

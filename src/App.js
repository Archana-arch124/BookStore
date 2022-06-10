import React, { lazy, Suspense } from 'react';
import './App.css';
import SignUp from './Pages/Signup/signUp';
import Login from './Pages/Login/login';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
/* import Dashboard from './Pages/Dashboard/dashboard';
 */import store from './Redux/store.js';
import { Provider } from 'react-redux';
const Dashboard = lazy(() => import('./Pages/Dashboard/dashboard'));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Redirect path="/" to="/Login" exact />
            <Route path="/SignUp" component={SignUp} exact />
            <Route path="/Login" component={Login} exact />
            <Suspense fallback={<div className="load">
              <div className="loader">
                <div />
                <div />
                <div />
                <div />
              </div>
              </div>}>
              <Route path="/Dashboard" component={Dashboard} ></Route>
            </Suspense>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

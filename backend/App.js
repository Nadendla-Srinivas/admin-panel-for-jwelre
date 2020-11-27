import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <PrivateRoute path="/" exact Component={Home}/>
         <Route path="/signin" Component={Signin}/>
         <Route path="/signup" Component={Signup}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;

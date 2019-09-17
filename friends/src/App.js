import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Login from './component/Login'
import PrivateRoute from './component/PrivateRoute';
import Friends from './component/Friends';


function App() {
  return (
    <Router>
    <div className="App">
      <h1>Sign Up folks</h1>
      <Route exact path="/" component={Login} /> 
      <Route path="/login" component={Login} />

      <PrivateRoute exact path="/friends" component={Friends} />

    </div>
    </Router>
    
  );
}
//i<3Lambd4

export default App;
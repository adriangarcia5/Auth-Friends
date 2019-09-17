import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Login from './component/Login'


function App() {
  return (
    <div className="App">
      <h1>Sign Up folks</h1>
      <Login />
    </div>
  );
}

export default App;

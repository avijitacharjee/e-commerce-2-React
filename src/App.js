import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';


function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/register" component={Header}/>
      </Switch>
    </Router>
  );
}

export default App;

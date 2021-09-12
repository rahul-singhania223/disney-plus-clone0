import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login';


function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path='/login'><Login /></Route>
        <Route exact path='/detail/:id'><Detail /></Route>        
        <Route exact path='/'><Home /></Route>
      </Switch>
    </Router>
  );
}

export default App;

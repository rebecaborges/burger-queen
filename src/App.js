import React from 'react';
import './App.css';
import home from './pages/home';
import saloon from './pages/saloon';
import kitchen from './pages/kitchen';
import CreateUser from './pages/create-account';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import createAccount from './pages/create-account';

function App() {
    return (
      <Router>
      <div className="App">
      
          <Route exact path="/" component={home}/>
          <Route exact path="/saloon" component={saloon}/>
          <Route exact path="/create-account" component={CreateUser}/>
          <Route exact path="/kitchen" component={kitchen}/>

      </div>
    </Router>
  );
};

export default App;
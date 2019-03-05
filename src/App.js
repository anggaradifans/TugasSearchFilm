import React, { Component } from 'react';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Register from './components/register'
import Login from './components/login'
import Footer from './components/footer'
import {Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Route path='/' component={Homepage} exact/>
        <Route path='/login' component={Login} exact/>
        <Route path='/register' component={Register} exact/>        
        <Footer/>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

//Components
import HostCreateQueue from './components/HostCreateQueue';
import Navbar from './components/Navbar';
import UserLogin from './components/UserLogin';
import UserSignUp from './components/UserSignup';
import AdminSignUp from './components/AdminSignUp';
import AdminLogin from './components/AdminLogin';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <HostCreateQueue></HostCreateQueue>
      </div>
    );
  }
}
export default App;

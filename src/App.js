import React from 'react';  
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

//Components
import HostCreateQueue from './components/HostCreateQueue';
import Navbar from './components/Navbar';
import UserLogin from './components/UserLogin';
import UserSignUp from './components/UserSignup';
import AdminSignUp from './components/AdminSignUp';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
        <AdminSignUp></AdminSignUp>
    </div>      
)

export default App;

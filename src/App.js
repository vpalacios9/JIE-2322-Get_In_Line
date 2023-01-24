import React, { Component } from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

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
      <div className="App">
     <BrowserRouter>
        <Routes>
        <Route path="/" element={<HostCreateQueue />}> </Route>
        <Route path="/userSignup" element={<UserSignUp />}> </Route>
        <Route path="/userLogin" element={<UserLogin />}> </Route>
        <Route path="/adminSignup" element={<AdminSignUp />}> </Route>
        <Route path="/adminLogin" element={<AdminLogin />}> </Route>
        <Route path="/createQueue" element={<HostCreateQueue />}> </Route>
        </Routes>
      </BrowserRouter>

    </div>
    );
  }
}
export default App;

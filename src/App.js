import React, { Component } from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//Components
import HostCreateQueue from './components/HostCreateQueue';
import HomePage from "./components/HomePage";
import Navbar from './components/Navbar';
import UserSignUp from './components/UserSignup';
import AdminSignUp from './components/AdminSignUp';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/homepage" element={<HomePage />}> </Route>
            <Route path="/userSignup" element={<UserSignUp />}> </Route>
            <Route path="/adminSignup" element={<AdminSignUp />}> </Route>
            <Route path="/login" element={<Login />}> </Route>
            <Route path="/createQueue" element={<HostCreateQueue />}> </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

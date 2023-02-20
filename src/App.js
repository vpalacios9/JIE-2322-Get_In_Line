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
import UserSignUp from './components/UserSignup';
import AdminSignUp from './components/AdminSignUp';
import Login from './components/Login';
import UserSelectPage from './components/UserSelectPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import WaitTime from "./components/WaitTime";

function App (props){

    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}> </Route>
            <Route path="/userSignup" element={<UserSignUp />}> </Route>
            <Route path="/adminSignup" element={<AdminSignUp />}> </Route>
            <Route path="/login" element={<Login />}> </Route>
            <Route path="/createQueue" element={<HostCreateQueue />}> </Route>
            <Route path="/userSelectPage" element={<UserSelectPage />}> </Route>
            <Route path="/waitTime" element={<WaitTime />}> </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;

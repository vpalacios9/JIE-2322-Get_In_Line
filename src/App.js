import React from 'react';  
import './App.css';

import HostCreateQueue from './components/HostCreateQueue';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <Navbar/>
    <HostCreateQueue/>
  </div>       
)

export default App;

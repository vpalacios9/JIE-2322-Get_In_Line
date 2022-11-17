import { Component } from 'react';  
import './App.css';

import HostCreateQueue from './components/HostCreateQueue';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends Component {
  render() {
    return (
     <div>
      <Navbar/>
      <HostCreateQueue/>
    </div>
      
    )
  }

}

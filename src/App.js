import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Row,Container,Col,Button} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Main from './conponent/Main/Main';
import AnotherSchool from './conponent/AnotherProject/AnotherProject';
import Navbar from './conponent/Navbars/Navbars'


function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" component={Main}/>
      <Route exact path="/moreSchoolProject" component={AnotherSchool}/>
      </Router>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import {Row,Container,Col,Button} from 'reactstrap';

import "./Main.css"


import Navbar from '../Navbars/Navbars';
import Photo from '../Photo/Photo'
import Skill from '../Skill/Skill';
import Project from '../Project/Project';


class Main extends Component {
    test1 =()=>{
        var eml= document.getElementById('photo');
        eml.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      }

      test2 =()=>{
        var eml= document.getElementById('ttt');
        eml.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      }
   
   
    render() {
        return (
            <div>
      <Navbar trigger1={this.test1} trigger2={this.test2}/>

<Container  className="fullwidth">


  <Row id= "photo" className="mag">
  <Col>
        <Project/>
  </Col>
  </Row>

  <Row id= "photo" >
      <Col>
      <Col sm="12"><Skill/></Col>
      </Col>
  </Row>

  <Row id= "photo"  className="mainphoto">    
        <Col sm="3"></Col>
        <Col sm="6"><Photo/></Col>
        <Col sm="3"></Col>
  </Row>
</Container>

<div id="ttt" >tttt</div>
            </div>
        );
    }
}

export default Main;
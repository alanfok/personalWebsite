import React, { Component } from 'react';
import {Row,Container,Col,Button} from 'reactstrap';
import aos from 'aos';
import 'aos/dist/aos.css';

import "./Main.css"


import Navbar from '../Navbars/Navbars';
import Photo from '../Photo/Photo'
import Skill from '../Skill/Skill';
import Project from '../Project/Project';


class Main extends Component {
    test1 =()=>{
        var eml= document.getElementById('project');
        eml.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      }

      test2 =()=>{
        var eml= document.getElementById('skill');
        eml.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      }
   
      test3 =()=>{
        var eml= document.getElementById('photo');
        eml.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      }

      componentDidMount(){
        aos.init();
      }



    render() {
        return (
            <div>
      <Navbar trigger1={this.test1} trigger2={this.test2} trigger3={this.test3}/>

<Container  className="fullwidth">


  <Row id= "project" className="mag">
  <Col>
        <Project/>
  </Col>
  </Row>


  <Row id= "skill" >
      <Col>
      <Col sm="12"><Skill/></Col>
      </Col>
  </Row>

  <Row id= "photo"  className="mainphoto" >    
        <Col sm="3"></Col>
        <Col sm="6"><Photo/></Col>
        <Col sm="3"></Col>
  </Row>

</Container>

<br/>
            </div>
        );
    }
}

export default Main;
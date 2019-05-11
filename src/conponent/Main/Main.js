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
  
  constructor(props)
    {
        super(props);
        this.state ={
            width: window.innerWidth,
        }

    }
    componentWillMount(){
        window.addEventListener("resize",this.sizeHandler2)
    }


    componentWillUnmount(){
        window.removeEventListener("resize",this.sizeHandler2)
    }
    sizeHandler2 =()=>{
        this.setState({width: window.innerWidth});
    }

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



      /**    
                     <div className="bg">
                <span className="firstletter">C</span>
                <span className="secendletter">o</span>
                <span className="secendletter">d</span>
                <span className="secendletter">e</span>
                <span className="secendletter">i</span>
                <span className="secendletter">s</span>
                <span className="secendletter">F</span>
                <span className="secendletter">U</span>
                <span className="secendletter">N</span>
                <span className="secendletter">&#128540;</span>
                <span className="dash">_</span>
             </div> 
             </div> */

             /*<div className="bgtest"></div>
             <p className="footnote">Photo by Clément H</p>
             */ 
    render() {
      const {width} = this.state;
      const isMobile = width <420;
      
      if(!isMobile)
      {//isLaptop
        return (
            <div>

      <Navbar trigger1={this.test1} trigger2={this.test2} trigger3={this.test3}/>
      <div className="bg">
                <span className="firstletter">C</span>
                <span className="secendletter">o</span>
                <span className="secendletter">d</span>
                <span className="secendletter">e</span>
                <span className="secendletter">i</span>
                <span className="secendletter">s</span>
                <span className="secendletter">F</span>
                <span className="secendletter">U</span>
                <span className="secendletter">N</span>
                <span className="dash">_</span>
             </div> 
          

          
          <Container  className="fullwidth">
            <Row id= "project" className="mag">
            <Col>
                  <Project/>
            </Col>
            </Row>
            </Container>
  
             <Container>
            <Row id= "skill" className="mag">
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
          <hr className="mainHrr"></hr>
          
          <div className="mab">


          </div>
                      </div>


        );
      }//END isLaptop
      else//is Mobile
      {
        return (
          <div>
    <Navbar trigger1={this.test1} trigger2={this.test2} trigger3={this.test3}/>
        <Container  className="fullwidth">
          <Row id= "project" className="magMobile">
          <Col>
                <Project/>
          </Col>
          </Row>
          <Row id= "skill" className="mag">
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


        <div className="mabMobile">


        </div>
                    </div>
      );//isMoblie

      }
    }
}

export default Main;
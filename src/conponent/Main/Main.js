import React, { Component } from 'react';
import {Row,Container,Col,Spinner} from 'reactstrap';
import aos from 'aos';
import 'aos/dist/aos.css';

import "./Main.css"


import BGimg from "../../photo/clement-h-544786-unsplash.jpg"

import Navbar from '../Navbars/Navbars';
import Photo from '../Photo/Photo'
import Skill from '../Skill/Skill';
import Project from '../Project/Project';
import Content from "../Content/Content"



class Main extends Component {
  
  constructor(props)
    {
        super(props);
        this.state ={
            width: window.innerWidth,
            sentense: ["W","E","L","C","O","M","E"],
            displaySentense: [],
            BGpreloaded: false
        }

    }
    componentWillMount(){
        document.title = "Alan's WebSite"
        window.addEventListener("resize",this.sizeHandler2)
  
    }


    componentWillUnmount(){
        window.removeEventListener("resize",this.sizeHandler2)
    }

/*
The Backgroud img preload
*/
BGpreLoad =()=>{
  var img = new Image();
  img.src=BGimg;
  if(!img.onload)
  {
    this.setState({BGpreloaded: true})
  }
}

sentense = (i)=>{
        var temp = [...this.state.displaySentense];
        temp.push(this.state.sentense[i])
        this.setState({displaySentense: temp})
    }

Sleep = (timeout) =>{
  return new Promise((resolve) =>{
    setTimeout(resolve,timeout);
  })
}

// Add word into array
// Call in ComponentDidAmount
wordDisplay= async() => {
  for(var i = 0; i< this.state.sentense.length ; i++)
  {
      this.sentense(i);
      await this.Sleep(800)
  }
}

    sizeHandler2 =()=>{
        this.setState({width: window.innerWidth});
    }

      toProject =()=>{
        var eml= document.getElementById('project');
        eml.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      }

      toSkill =()=>{
        var eml= document.getElementById('skill');
        eml.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      }
   
      toPhoto =()=>{
        var eml= document.getElementById('photo');
        eml.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      }

      toTimeline =()=>{
        var eml= document.getElementById('timeline');
        eml.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }

      componentDidMount(){
        aos.init();
        this.wordDisplay();
      }

    render() {
      const {width} = this.state;
      const isMobile = width <420;
     
      if(!isMobile)
      {//isLaptop
            return (
                <div>
          <Navbar trigger1={this.toProject} trigger2={this.toSkill} trigger3={this.toPhoto} trigger4={this.toTimeline}/>
          <div className="bgtest">
                    <div className="bgtext">
                        <span className="firstletter">{this.state.displaySentense}</span>
                        <span className="dash">_</span>
                    </div>
                </div> 
                
                <p className="footnote">Photo by Clément H</p>   
              <Container  className="fullwidth">
                <Row id= "project" className="mag">               
                      <Project/>      
                </Row>
                </Container>
      
                <Container>
                <Row id= "skill" className="mag">
                    <Col>
                    <Col sm="12"><Skill/></Col>
                    </Col>
                </Row>
                <hr className="mainHrr"></hr>
                <Row id= "photo"  className="mainphoto" >    
                      <Col sm="3"></Col>
                      <Col sm="6"><Photo/></Col>
                      <Col sm="3"></Col>
                </Row>

              </Container>
              <hr className="mainHrr" id="timeline" ></hr>
              <Container>
                <Row>
                <Col><h1>Timeline</h1></Col>
                </Row>
                <Row>
                  <Col sm="8" className="offset-sm-2">
                      <Content title="Undergraduate at Concordia" year="2017 to Current" sty="pinkInline" icon="pen">
                      <p>
                      I am pursuing my undergraduate studies with major in Computer Science. I have taken courses like OOPs, Data structure and algoritum ,operation system and databas over the years and have better understanding of these subjects.
                      </p>
                      </Content>
                      <Content title="Software Developer at CAE(internship)" year="2018 (4 months)"  sty="pinkInline" icon="faBriefcase">        
                            <p>I maintained the existing program(Configuration file management) and modified its functionality. The program is written by C#, C++ and SQlite.Also I created servel testes(Unit test) to test the new functionality.</p> 
                      </Content>
                      <Content title="Le Gourmand De Szechuan(Chef Assistant)" year="2008-2017"  sty="pinkInline" icon="faBriefcase">        
                            <p>I prepared the food, maintained kitchen clearance. Learnt how to muilt-tasking and how to cooperate with people.</p> 
                      </Content>
                      <Content title="College at Lasalle" year="2005-2008"  sty="pinkInline" icon="pen">        
                            <p>I pursued a degree in accounting and business management. I have taken courses like accounting, management, and planning for the business.</p> 
                      </Content>
                  </Col>
                </Row>
              </Container>
              <div className="mab">
              </div>
                          </div>
            );
      }//END isLaptop
      else//is Mobile
      {
        return (
          <div>
    <Navbar trigger1={this.toProject} trigger2={this.toSkill} trigger3={this.toPhoto} trigger4={this.toTimeline}/>
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
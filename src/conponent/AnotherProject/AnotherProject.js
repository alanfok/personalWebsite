import React, { Component } from 'react'
import {Container ,Col , Row ,Button} from 'reactstrap'

import ProjectCard from '../Project/ProjectCard/ProjectCard';
import Navbar from '../Navbars/Navbars';


import './AnotherProject.css';



export default class AnotherSchool extends Component {


  constructor(props)
  {
    super(props);
    this.state = {
      width: window.innerWidth,
    }
  }

  componentWillMount(){
    document.title = "Alan's WebSite"
    window.addEventListener("resize",this.sizeHandler2)

}


componentWillUnmount(){
    window.removeEventListener("resize",this.sizeHandler2)
}

sizeHandler2 =()=>{
  this.setState({width: window.innerWidth});
}

  render() {
    const isMobile = this.state.width <769;
    return (
      <div >
        <Navbar isMobile={isMobile} trigger1={this.toProject} trigger2={this.toSkill} trigger3={this.toPhoto} trigger4={this.toTimeline}/>
         <Container className="martop">
            <Row>
              <Col sm="4">
                <ProjectCard title="Pong game">
                <ul className="wordleft">
                        <li>created the pong game by unity</li>
                        <li>using C# to implement the object in the game</li>
                </ul>    
                </ProjectCard>
              </Col>
              <Col sm="4">
              <ProjectCard title="Duck Hunt" button={<Button color="success" a href="https://github.com/alanfok/Comp371DuckHunt">sourceCode(Git)</Button>}>
                <ul className="wordleft">
                        <li>created the duck hunt by using OpenGL</li>
                        <li>coded in C++</li>
                        <li>included the lighting, animation and collision</li>
                </ul>    
                </ProjectCard>
              </Col>
              <Col sm="4">
              <ProjectCard title="Java Calculator" button={<Button color="success" a href="https://github.com/Fair-Child/Calculator">sourceCode(Git)</Button>}>
                <ul className="wordleft">
                        <li>created the scientific Calculator by using Java</li>
                        <li>used MVC data structure</li>
                        <li>tested by Junit for unit test</li>
                </ul>    
                </ProjectCard>
              </Col>
            </Row>
         </Container>
      </div>
    )
  }
}

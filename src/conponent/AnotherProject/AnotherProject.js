import React, { Component } from 'react'
import {Container ,Col , Row ,Button} from 'reactstrap'

import Pong from './PongGame/Pong'
import ProjectCard from '../Project/ProjectCard/ProjectCard';



import './AnotherProject.css';

export default class AnotherSchool extends Component {
  render() {
    return (
      <div className="martop">
         <Container>
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

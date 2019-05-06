import React, { Component } from 'react'
import {Container ,Col , Row} from 'reactstrap'

import Pong from './PongGame/Pong'


import './AnotherProject.css';

export default class AnotherSchool extends Component {
  render() {
    return (
      <div className="martop">
         <Container>
            <Row>
              <Col sm="4">
                <Pong/>
              </Col>
              <Col sm="4">
              
              </Col>
              <Col sm="4">
              
              </Col>
            </Row>
         </Container>
      </div>
    )
  }
}

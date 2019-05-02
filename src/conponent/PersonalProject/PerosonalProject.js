import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap'

import Pong from './PongGame/Pong'



export default class PerosonalProject extends Component {
  render() {
    return (
      <div>
        <h1 className="headcolor">{"<"}PerosonalProject{">"}</h1>
        <Container>
            <Row>
                <Col sm-="4">
                <Pong/>
                </Col>
                <Col sm="4">
                hello
                </Col>
                <Col sm="4">
                hello
                </Col>
            </Row>
        </Container>
        <h1 >{"</"}PerosonalProject{">"}</h1>
      </div>
    )
  }
}

import React from 'react';
import {Row,Container,Col,Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Skill.css"
import csharp from "../../photo/FyR1o1Wc.png"
import { faJs, faNodeJs, faJsSquare, faNode, faReact, faNpm } from '@fortawesome/free-brands-svg-icons';
import { faDatabase} from '@fortawesome/free-solid-svg-icons';



const skill = props => {
    return (
        <div className="mar">    
        <h1>Skill</h1>
        <br/>
            <Container>
                <Row>
                    <Col sm="2"></Col>
                    <Col sm ="3">
                    <span className="dot"><p className="pad">C#</p></span>
                    <br/>
                    C#
                    </Col>
                    <Col sm="2">
                    <p><FontAwesomeIcon icon={faJsSquare} size="4x"/><br/>JavaScript</p>                  
                    </Col>
                    <Col sm="3">
                    <p><FontAwesomeIcon icon={faNode} size="4x"/><br/>NodeJS</p>
                    </Col>      
                </Row>
                <br/>
                <Row>
                    <Col sm="2"></Col>
                    <Col sm ="3">
                    <p><FontAwesomeIcon icon={faReact} size="4x"/>   <br/> ReactJS</p>
                    </Col>
                    <Col sm="2">
                    <p><FontAwesomeIcon icon={faNpm} size="4x"/><br/>npm</p>                  
                    </Col>
                    <Col sm="3">
                    <p><FontAwesomeIcon icon={faDatabase} size="4x"/><br/>mySQL</p>
                    </Col>     
                </Row>

            </Container>

             </div>
    );
};


export default skill;
import React from 'react';
import {Row,Container,Col,Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Skill.css"
import csharp from "../../photo/FyR1o1Wc.png"
import { faJs, faNodeJs, faJsSquare, faNode, faReact, faNpm ,faAngular, faJava} from '@fortawesome/free-brands-svg-icons';
import { faDatabase} from '@fortawesome/free-solid-svg-icons';

import aos from 'aos';
import 'aos/dist/aos.css';




const skill = props => {
    aos.init({once : false});

    return (
        
        <div className="mar">    
        <hr className="hrr"/>
        <br/>
        <h1 data-aos= "fade-up">SKILL</h1>
        <br/>
        <br/>
            <Container>
                <Row>
                    <Col sm="2"></Col>
                    <Col sm ="3" data-aos= "fade-up">
                    <span className="dot"><p className="pad">C#</p></span>
                    <br/>
                    C#
                    </Col>
                    <Col sm="2">
                    <p data-aos= "fade-up"><FontAwesomeIcon icon={faJsSquare} size="4x"/><br/>JavaScript</p>                  
                    </Col>
                    <Col sm="3">
                    <p data-aos= "fade-up"><FontAwesomeIcon icon={faNode} size="4x"/><br/>NodeJS</p>
                    </Col>      
                </Row>
                <br/>
                <Row>
                    <Col sm="3"></Col>
                    <Col sm ="3"> 
                    <p data-aos= "fade-up"><FontAwesomeIcon icon={faJava} size="4x"/><br/>Java</p>   
                    </Col>
                    <Col sm="3">
                    <p data-aos= "fade-up"><FontAwesomeIcon icon={faAngular} size="4x"/><br/>Angular 8+</p>                  
                    </Col>
                    <Col sm="3">
                    
                    </Col>     
                </Row>
                <br/>
                <Row>
                    <Col sm="2"></Col>
                    <Col sm ="3">
                    <p data-aos= "fade-up"><FontAwesomeIcon icon={faReact} size="4x"/>   <br/> ReactJS</p>
                    </Col>
                    <Col sm="2">
                    <p data-aos= "fade-up"><FontAwesomeIcon icon={faNpm} size="4x"/><br/>npm</p>                  
                    </Col>
                    <Col sm="3">
                    <p data-aos= "fade-up"><FontAwesomeIcon icon={faDatabase} size="4x"/><br/>MySQL</p>
                    </Col>     
                </Row>
            


            </Container>

             </div>
    );
};


export default skill;
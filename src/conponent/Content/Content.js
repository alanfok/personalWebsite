import React, { Component } from 'react'
import "./Content.css";
import {Container , Row, Col} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt,faBriefcase} from '@fortawesome/free-solid-svg-icons';


import aos from 'aos';
import 'aos/dist/aos.css';



export class Content extends Component {

    componentDidMount(){
        aos.init();
    }

    IC=(e)=>{
        if(e == "pen"){
            return faPencilAlt;
        }
        else{
            return faBriefcase;
        }
  }

  render() {
      const {title, year , sty,children, icon} = this.props;
      const style = `t_backgroud ${sty} tfleft`
      


    return (
        
        <Container>
            <Row>
                <Col sm="3">
                    <div className="contain"></div>
                    <div className='circle' data-aos="fade-right"><span className="circle_icon"><FontAwesomeIcon icon={this.IC(icon)} size="lg"/></span></div>
                </Col>
                <Col sm="9">
                    <div className={style} data-aos="fade-left">
                    <span className="tleft">{title}</span><span className="tright">{year}</span>
                    <br></br>
                    {children}
                    </div>
                </Col>
            </Row>

        </Container>

    )
  }
}

export default Content

import React, { Component } from 'react'
import "./Content.css";
import {Container , Row, Col} from 'reactstrap'


import aos from 'aos';
import 'aos/dist/aos.css';



export class Content extends Component {

    componentDidMount(){
        aos.init();
    }



  render() {
      const {title, year , sty,children} = this.props;
      const style = `t_backgroud ${sty} tfleft`
    return (
        
        <Container>
            <Row>
                <Col sm="3">
       
                    <div className="contain"></div>
                    <div className='circle' data-aos="fade-right"></div>
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

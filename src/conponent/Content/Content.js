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
      const style = `t_backgroud ${sty}`
    return (
        
        <Container>
            <Row>
                <Col sm="4">
       
                    <div className="contain"></div>
                    <div className='circle' data-aos="fade-right"></div>
                </Col>
                <Col sm="8">
                    <div className={style} data-aos="fade-left">
                    <span>{title}</span><span>{year}</span>
                    {children}
                    </div>
                </Col>
            </Row>

        </Container>

    )
  }
}

export default Content

import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardHeader, CardSubtitle, Button } from 'reactstrap';
import aos from "aos";
import 'aos/dist/aos.css';

import "./ProjectCard.css"

export default class Projectcard extends Component {
    render() {
        aos.init();
        const{title,children,button,demo} = this.props;
        return (
            <div className='card cardtext'  data-aos="fade-up">
                    <div className='card-header'><h3>{title}</h3></div>
                    <div className='card-body'>
                        <div className="cardtextchilder">
                            {children}
                        </div>
                        <div>
                            {button}&nbsp;{demo}
                        </div>
                    
                    </div>   
            </div>

        )
    }
}

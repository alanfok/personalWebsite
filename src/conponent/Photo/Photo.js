import React, { Component } from 'react';
import  './Photo.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';


import photo from "../../photo/personalSqr.jpg"
import CV from "../../photo/nResume12.pdf"

import aos from 'aos';
import 'aos/dist/aos.css';

class Photo extends Component {

    onCVClick(){
      window.open(CV);
    }

    componentDidMount(){
      aos.init()
    }
    render() {
        return (
            <div>
              <h1 data-aos="fade-up">About me</h1>
              <br/>
              <div data-aos="fade-up">
              <img className="photo" src={photo} alt="photo1"></img>
              </div>
              <br/>
              <b data-aos="fade-up">Alan Fok</b>
              <p data-aos="fade-up">Hi.I'm the second year Concordia Computer Science student
                . And want to be a Full stack developer.</p>
              <p data-aos="fade-up">I've always had a passion for technology since I was young, even before becoming a Computer Science student. To become a Full stack developer, I learnt React and Node.JS by myself. and I also learned Java and C# in school and internship.</p>
              <div data-aos="fade-up">
              <button onClick={this.onCVClick} className={"photoButton"}>CV</button>
              </div>
              <div>
                <br/>
                <br/>
              </div>
          </div>
        );
    }
}

export default Photo;
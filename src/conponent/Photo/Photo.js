import React, { Component } from 'react';
import  './Photo.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';


 import photo from "../../photo/personalSqr.jpg"
import CV from "../../photo/nResume12.pdf"

class Photo extends Component {

    onCVClick(){
      window.open(CV);
    }

    render() {

        return (
            <div>
              <hr></hr>
              <h1>About me</h1>
              <br/>
              <img className="photo" src={photo} alt="photo1"></img>
              <br/>
              <b>Alan Fok</b>
              <p>Hi.I'm the second year Concordia Computer Science student
                . And want to be a Fullstack developper.</p>
              <p>I've always had a passion for technology since I was young, even before becoming a Computer Science student</p>
              <button onClick={this.onCVClick} className={"photoButton"}>CV</button>
          </div>
        );
    }
}

export default Photo;
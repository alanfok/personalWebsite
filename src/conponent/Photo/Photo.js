import React, { Component } from 'react';
import  './Photo.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';


 import photo from "../../photo/personalSqr.jpg"


class Photo extends Component {

    render() {

        return (
            <div>
              <img className="photo" src={photo} alt="Card image cap"></img>
            <Card className="mar">
              <CardImg   />
              <CardBody>
                <CardTitle>Alan Fok</CardTitle>
                
                <CardText>
                    <b>Language</b>
 
                    </CardText>
                <Button >CV</Button>
              </CardBody>
            </Card>
          </div>
        );
    }
}

export default Photo;
import React, { Component } from 'react';
import  './Photo.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';


class Photo extends Component {

    render() {

        return (
            <div>
            <Card className="mar">
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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
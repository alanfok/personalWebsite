import React,{Component} from 'react';
import "./Project.css";
import {Card,CardHeader,CardBody, Container, Row,Col, Button} from "reactstrap";
import {Link} from 'react-router-dom';

import SmallWorld from './SmallWorld/SmallWorld';
import RentalApartment from "./RentalApartment/RentalApartment";
import DatabaseProject from "./DatabaseProject/DatabaseProject";

class Project extends Component{
    constructor(props)
    {
        super(props);
        this.state ={
            width: window.innerWidth,
        }

    }

    componentWillMount(){
        window.addEventListener("resize",this.sizeHandler)
    }


    componentWillUnmount(){
        window.removeEventListener("resize",this.sizeHandler)
    }
    sizeHandler =()=>{
        this.setState({width: window.innerWidth});
    }
    render(){
        console.log(this.state.width);
        const {width} = this.state;
        const isNeedResize = width<994;
       
        if(isNeedResize) //Mobile Mode
        {
            return(
                <div>
                    <h1 className="head">PROJECT</h1>
                    <Container>

                        <Row >
                            <Col sm="12" lg="4">
                                <SmallWorld/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm="12" lg="4">
                                <DatabaseProject/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col  sm="12" lg="4">
                                <RentalApartment/>
                            </Col>
                        </Row>
                    </Container>
                    <br/>
                    <Link to="/moreSchoolProject">more</Link>
                </div>
            )
        }
        else //No Need Resize
        {
            return (
                <div className="text">
                    <h1 className="head">PROJECT</h1>
                    <Container>

                        <Row >
                            <Col sm="4" lg="4">
                                <SmallWorld/>
                            </Col>
                            <Col sm="4" lg="4">
                                <DatabaseProject/>
                            </Col>
                            <Col  sm="4" lg="4">
                                <RentalApartment/>
                            </Col>

                        </Row>
                    </Container>
                    <br/>
                    <Link to="/moreSchoolProject">more</Link>

                </div>
            );
        }//End of o need resize
    }
};


export default Project;
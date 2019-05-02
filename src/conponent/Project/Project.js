import React from 'react';
import "./Project.css";
import {Card,CardHeader,CardBody, Container, Row,Col, Button} from "reactstrap";
import {Link} from 'react-router-dom';

import SmallWorld from './SmallWorld/SmallWorld';
import RentalApartment from "./RentalApartment/RentalApartment";
import DatabaseProject from "./DatabaseProject/DatabaseProject";


const Project = props => {
    return (
        <div className="text">
            <h1 className="headcolor">{"<"}Acadamic{">"}</h1>
            <Container>

                <Row >
                    <Col sm="4">
                        <SmallWorld/>
                    </Col>
                    <Col sm="4">
                        <DatabaseProject/>
                    </Col>
                    <Col sm="4">
                        <RentalApartment/>
                    </Col>

                </Row>




            </Container>
            <br/>
            <Link to="/moreSchoolProject">more</Link>
            <h1>{"</"}Acadamic{">"}</h1>
        </div>
    );
};


export default Project;
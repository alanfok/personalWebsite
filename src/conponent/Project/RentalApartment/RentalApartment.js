import React, { Component } from 'react';
import {Card,CardHeader,CardBody, Button} from "reactstrap";

import "./RentalApartment.css"
import aos from "aos";
import 'aos/dist/aos.css';

const RentalApartment = props =>{
    aos.init();
    return(

            <Card className="shadow h-100" data-aos="fade-up">
                            <CardHeader> <h4>Apartment Rental System (Web)()working</h4></CardHeader>
                            <CardBody className="aptCard">
                                <ul className= "textleft">
                                    <li>Using ReactJS, CSS ,Nodejs and MySQL</li>
                                    <li>Similar the rental system</li>
                                    <li>Impliment log-in system by using ReactJS</li>
                                </ul>
                                <Button color="success">sourceCode(Git)</Button>
                            </CardBody>
                            
                        </Card>
    )
}

export default RentalApartment;
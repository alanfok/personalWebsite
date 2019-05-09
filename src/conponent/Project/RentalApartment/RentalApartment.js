import React, { Component } from 'react';
import {Card,CardHeader,CardBody, Button} from "reactstrap";

import "./RentalApartment.css"



const RentalApartment = props =>{
    return(

            <Card className="shadow h-100">
                            <CardHeader> <h4>Apartment Rental System (Web)</h4></CardHeader>
                            <CardBody className="aptCard">
                                <ul className= "textleft">
                                    <li>Using html, CSS ,javascript and PHP</li>
                                    <li>Similar the rental system</li>
                                    <li>Impliment log-in system by PHP session</li>
                                </ul>
                            </CardBody>
                        </Card>
    )
}

export default RentalApartment;
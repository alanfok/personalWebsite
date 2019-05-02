import React, { Component } from 'react';
import {Card,CardHeader,CardBody, Button} from "reactstrap";

import "./RentalApartment.css"



const RentalApartment = props =>{
    return(

            <Card className="shadow">
                            <CardHeader> <h4>Apartment Rental System <br/> (Web Project)</h4></CardHeader>
                            <CardBody>
                                <ul className= "textleft">
                                    <li>Using html, CSS ,javascript and PHP</li>
                                    <li>Similar the rental system</li>
                                    <li>Impliment log-in system by PHP session</li>
                                </ul>
                                <Button color="success">sourceCode(Git)</Button>
                            </CardBody>
                        </Card>
    )
}

export default RentalApartment;
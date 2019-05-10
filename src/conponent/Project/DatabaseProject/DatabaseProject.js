import React, { Component } from 'react';
import {Card,CardHeader,CardBody, Button} from "reactstrap";

import "./DatabaseProject.css" //css style
import aos from "aos";
import 'aos/dist/aos.css';

const DatabaseProject  = props =>{
    aos.init();
    return(
        <Card className="shadow" data-aos="fade-up">
        <CardHeader> <h4>Company internal System (Database)</h4></CardHeader>
        <CardBody>
            <ul className= "textleft">
                <li>Creating the web site by PHP and Database by MySQL for company.</li>
                <li>Using PHP for the backend to connect MySQL.</li>
                <li>Designing the Database Architecture (BCNF, 3NF).</li>
            </ul>
            <Button color="success">sourceCode(Git)</Button>
        </CardBody>
    </Card>
    );
}

export default DatabaseProject;
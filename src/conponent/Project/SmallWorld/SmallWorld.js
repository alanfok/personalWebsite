import React, { Component } from 'react';
import {Card,CardHeader,CardBody, Container, Row,Col, Button,CardTitle} from "reactstrap";

import "./SmallWorld.css"
import aos from "aos";
import 'aos/dist/aos.css';


const SmallWorld = props =>{
    aos.init();
    return(
        <div>
            <Card className="shadow h-100 " data-aos="fade-up">
                            <CardHeader> <h4>game "Small Word" <br/>(C++)</h4></CardHeader>
                            <CardBody className="pad">
                                <ul>
                                    <li className="textleft">Create by using C++</li>
                                    <li className="textleft">Using Design Pattern</li>
                                    <ul >
                                        <li className="textleft">Strategy</li>
                                        <li className="textleft">Decorator</li>
                                        <li className="textleft">Observer</li>
                                    </ul>
                                    <li className="textleft">Create map by graph matrix</li>
                                </ul>
                                <Button color="success" a href="https://github.com/alanfok/Comp345P1">sourceCode(Git)</Button>
                            </CardBody>
                        </Card>
                        </div>
    )
}

export default SmallWorld;
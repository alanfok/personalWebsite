import React, { Component } from 'react';
import {Card,CardHeader,CardBody, Container, Row,Col, Button} from "reactstrap";

import "./SmallWorld.css"



const SmallWorld = props =>{
    return(

            <Card className="shadow">
                            <CardHeader> <h4>game "Small Word" <br/>(C++)</h4></CardHeader>
                            <CardBody>
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
                                <Button color="success">sourceCode(Git)</Button>
                            </CardBody>
                        </Card>
    )
}

export default SmallWorld;
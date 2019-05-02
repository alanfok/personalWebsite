import React, { Component } from 'react'
import {Card,CardHeader,CardBody, Container, Row,Col, Button} from "reactstrap";

const Pong = props =>{
    return(
        <Card>
            <CardHeader>Pong Game <br/>C#,unity</CardHeader>
            <CardBody>
                    <ul>
                        <li>create the pong game by unity</li>
                        <li>using C# to impliment the object in the game</li>
                    </ul>
            </CardBody>
        </Card>
    )
}


export default Pong;

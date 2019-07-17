import React,{Component} from 'react';
import "./Project.css";
import {Container, Row,Col,Button} from "reactstrap";
import {Link} from 'react-router-dom';
import aos from 'aos';
import 'aos/dist/aos.css';

import ProjectCard from './ProjectCard/ProjectCard'
import SmallWorld from './SmallWorld/SmallWorld';
import RentalApartment from "./RentalApartment/RentalApartment";
import DatabaseProject from "./DatabaseProject/DatabaseProject";
import Projectcard from './ProjectCard/ProjectCard';

class Project extends Component{
    constructor(props)
    {
        super(props);
        this.state ={
            width: window.innerWidth,
        }

    }

    componentDidMount(){
        aos.init();
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
        const {width} = this.state;
        const isNeedResize = width<994;
       
        if(isNeedResize) //Mobile Mode
        {
            return(
                <div>
                    <span data-aos="fade-up"><h1 className="head">PROJECT</h1></span>
                    <Container>
                        <Row >
                            <Col sm="12" lg="5">          
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
                    <h1 className="head" data-aos="fade-up">PROJECT</h1>
                    <Container>

                        <Row >
                            <Col sm="4" lg="4">
                                <Projectcard title={"game \"Small World\"(C++)"} button={<Button color="success" a href="https://github.com/alanfok/Comp345P1">sourceCode(Git)</Button>}>
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
                                </Projectcard>
                            </Col>
                            <Col sm="4" lg="4">
                                <Projectcard title={"Company internal System (Database)"} button={null}>
                                    <ul className= "textleft">
                                        <li>Creating the web site by PHP and Database by MySQL for company.</li>
                                        <li>Using PHP for the backend to connect MySQL.</li>
                                        <li>Designing the Database Architecture (BCNF, 3NF).</li>
                                    </ul>                       
                                </Projectcard>
                            </Col>
                            <Col  sm="4" lg="4">
                                <ProjectCard title="Apartment Rental System (Web)" button={<Button color="success" href="https://github.com/alanfok/rental_apartment">sourceCode(Git)</Button>} demo={<Button color="primary" href="https://rentalappartment.herokuapp.com/">Demo</Button>}>
                                    <ul className= "textleft">
                                        <li>Using ReactJS, CSS ,Nodejs and MySQL</li>
                                        <li>Similar the rental system</li>
                                        <li>Impliment log-in system by using ReactJS</li>
                                    </ul>
                                    <p>(in process) <br/> username:abc <br/>password:123</p>
                                </ProjectCard>
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
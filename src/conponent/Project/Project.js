import React,{Component} from 'react';
import "./Project.css";
import {Container, Row,Col,Button, Collapse} from "reactstrap";
import {Link} from 'react-router-dom';
import aos from 'aos';
import 'aos/dist/aos.css';

import ProjectCard from './ProjectCard/ProjectCard'
import SmallWorld from './SmallWorld/SmallWorld';
import RentalApartment from "./RentalApartment/RentalApartment";
import DatabaseProject from "./DatabaseProject/DatabaseProject";


class Project extends Component{
    constructor(props)
    {
        super(props);
        this.state ={
            width: window.innerWidth,
            toggle : false,
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
        aos.init();
        const {width} = this.state;
        const isNeedResize = width<994;
       
        if(isNeedResize) //Mobile Mode
        {
            return(
                <div >
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
                <div className="center">
                    <div className="text">
                        <h1 className="head" data-aos="fade-up">PROJECT</h1>
                        <Container>
                            <Row >
                                <Col sm="4" lg="4">
                                    <ProjectCard title={"Book Borrow System ( Java )"} button={<Button color="success" a href="https://github.com/VickelLeung/SOEN487A2">sourceCode(Git)</Button>}>
                                    <ul>
                                        <li className="textleft">Create by Java, JSP and MySQL</li>
                                        <li className="textleft">Using SOAP & REST for the core</li>
                                        <li className="textleft">Designing the MVC Architecture in the back-end</li>
                                        <li className="textleft">Working in a team of 3 people</li>
                                    </ul>                             
                                    </ProjectCard>
                                </Col>
                                <Col sm="4" lg="4">
                                    <ProjectCard title={"Company internal System (Database)"} button={null}>
                                        <ul className= "textleft">
                                            <li>Creating the web site by PHP and Database by MySQL for company.</li>
                                            <li>Using PHP for the backend to connect MySQL.</li>
                                            <li>Designing the Database Architecture (BCNF, 3NF).</li>
                                        </ul>                       
                                    </ProjectCard>
                                </Col>
                                <Col  sm="4" lg="4">
                                    <ProjectCard title="Apartment Rental System (Web)" button={<Button color="success" href="https://github.com/alanfok/rental_apartment">sourceCode(Git)</Button>} demo={<Button color="primary" href="https://rentalappartment.herokuapp.com/">Demo</Button>}>
                                        <ul className= "textleft">
                                            <li>Using ReactJS, CSS ,Nodejs and MySQL</li>
                                            <li>Similar the rental system</li>
                                            <li>Impliment log-in system by using ReactJS</li>
                                        </ul>
                                        <p>(in process) </p>
                                    </ProjectCard>
                                </Col>
                            </Row>
                        </Container>
                        <br/>
                        
                        <Collapse isOpen={this.state.toggle}>
                        <Container>
                            <Row >
                                <Col sm="4" lg="4">
                                    <ProjectCard title={"game \"Small World\"(C++)"} button={<Button color="success" a href="https://github.com/alanfok/Comp345P1">sourceCode(Git)</Button>}>
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
                                    </ProjectCard>
                                </Col>
                                <Col sm="4" lg="4">
                                    <ProjectCard title={"Company internal System (Database)"} button={null}>
                                        <ul className= "textleft">
                                            <li>Creating the web site by PHP and Database by MySQL for company.</li>
                                            <li>Using PHP for the backend to connect MySQL.</li>
                                            <li>Designing the Database Architecture (BCNF, 3NF).</li>
                                        </ul>                       
                                    </ProjectCard>
                                </Col>
                                <Col  sm="4" lg="4">
                                    <ProjectCard title="Apartment Rental System (Web)" button={<Button color="success" href="https://github.com/alanfok/rental_apartment">sourceCode(Git)</Button>} demo={<Button color="primary" href="https://rentalappartment.herokuapp.com/">Demo</Button>}>
                                        <ul className= "textleft">
                                            <li>Using ReactJS, CSS ,Nodejs and MySQL</li>
                                            <li>Similar the rental system</li>
                                            <li>Impliment log-in system by using ReactJS</li>
                                        </ul>
                                        <p>(in process) </p>
                                    </ProjectCard>
                                </Col>
                            </Row>
                        </Container>
                        <br/>
                    </Collapse>
                    <Button color="info" data-aos="fade-up" onClick={()=>this.setState({toggle : !this.state.toggle})}>{(this.state.toggle)?'Less ▲':'More ▼'}</Button>
                         {/** 

                        <button className="projectMoreButton" data-aos="fade-up" onClick={()=>this.setState({toggle : !this.state.toggle})}>{(this.state.toggle)?'less':'more'}</button>
                   
                        <Link to="/moreSchoolProject"><button className="projectMoreButton" data-aos="fade-up">more</button></Link>
                        */}
                    </div>
                </div>
            );
        }//End of o need resize
    }
};

export default Project;
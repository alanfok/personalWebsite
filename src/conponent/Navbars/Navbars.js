import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbars.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithub, faLinkedin, faMailchimp} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {Redirect} from 'react-router-dom';


import {Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';




const Navbars = props => {
 

    return (
        <div>
            <Navbar color="dark" light expand="md" className="fixed-top">
                <NavbarBrand><button className="navTitleButton" onClick={()=>{window.location.href="/"}}>Alan Website</button></NavbarBrand>
                <Nav  navbar>
                <NavItem onMouseEnter={props.trigger1} ><span className="navSelection" >Project/</span></NavItem>
                <NavItem onMouseEnter={props.trigger2} > <span className="navSelection" >Skill/ </span></NavItem>
                <NavItem onMouseEnter={props.trigger3} ><span className="navSelection" >About me/ </span> </NavItem>
                </Nav>
                <Nav  className="ml-auto">
                <NavItem><Button a href="mailto:alan606con@gmail.com" className="LinkenInButton" ><FontAwesomeIcon icon={faEnvelope} size='lg'/></Button></NavItem>
                    <NavItem><Button a href="https://www.linkedin.com/in/fok-poon-kai-alan-850417151/" className="LinkenInButton" ><FontAwesomeIcon icon={faLinkedin} size='lg'/></Button></NavItem>
                    <NavItem><Button a href="https://github.com/alanfok" className="gitbutton" ><FontAwesomeIcon icon={faGithub} size='lg'/></Button></NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};


export default Navbars;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbars.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithub, faLinkedin, faMailchimp} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';


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
            <Navbar color="light" light expand="md" className="fixed-top">
                <NavbarBrand>Alan Website</NavbarBrand>
                <Nav  navbar>
                <NavItem onMouseEnter={props.trigger1} >Project/</NavItem>
                <NavItem onMouseEnter={props.trigger2} >Skill/ </NavItem>
                <NavItem onMouseEnter={props.trigger3} >About me/  </NavItem>
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
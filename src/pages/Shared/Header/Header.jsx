import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Container className='mb-5'>
            <div className="text-center mt-4">
                <img src={logo} alt="the-news-dragon-logo" />
                <p className='mt-2'><small>Journalism Without Fear or Favour</small></p>
                <p className='lh-1 fw-bold'>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
            <div className='d-flex mb-5'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={50} pauseOnHover>
                    I can be a React component, multiple React components, or just some text... I can be a React component, multiple React components, or just some text...
                </Marquee>
            </div>
            {/* NavBar */}
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;
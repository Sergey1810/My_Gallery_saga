import React from 'react';
import {Container, Nav, NavDropdown, Offcanvas} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import {Link, useNavigate} from "react-router-dom";
import My from "./My/My";


const Header = () => {
    const navigate = useNavigate()

    function handlerClick() {
        navigate('/')
    }

    return (
        <div>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand onClick={handlerClick} style={{cursor:'pointer'}}>My Gallery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar"/>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                <My/>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <hr/>
                        <Offcanvas.Body>

                            <Nav className="justify-content-end flex-grow-1 pe-3">

                                <Link to='/' className='menu__items'>
                                    Галерея
                                </Link>

                                <Link to='/about' className='menu__items'>Обо Мне</Link>
                            </Nav>
                        </Offcanvas.Body>
                        <hr/>
                        <span>Email: Deadlook15@yandex.ru</span>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
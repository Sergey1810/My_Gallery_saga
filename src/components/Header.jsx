import React from 'react';
import {Container, Nav, Offcanvas} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import {Link, useNavigate} from "react-router-dom";



const Header = () => {
    const navigate = useNavigate()
    function handlerClick() {
        navigate('/')
    }
    return (
        <div>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand onClick={handlerClick} style={{cursor: 'pointer', fontSize: 38, fontWeight: "bold"}} >
                        My Gallery
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar"/>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header className="align-items-center"  closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel" >
                                    <h1 >My Gallery</h1>
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
                        <span className='d-flex justify-content-center mb-10'>Email: Deadlook15@yandex.ru</span>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
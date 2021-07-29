import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav'
import { ROOT, BASIC_FORM, FORMIK_FORM } from "../path";
import { Link, useLocation } from "react-router-dom";



export default function NavigationBarComponent() {
    const [toggle] = useState(false);
    const { pathname } = useLocation();

    return (
        <Navbar bg="light" expand="lg" onToggle={toggle}>
            <Container fluid={true}>
                <Link className={`navbar-brand`} to={ROOT}>Formik</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`me-auto`}>
                        <Nav.Item>
                            <Link className={`nav-link ${BASIC_FORM === pathname && "active"}`} to={BASIC_FORM}>Basic</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className={`nav-link ${FORMIK_FORM === pathname && "active"} `} to={FORMIK_FORM}>Test</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

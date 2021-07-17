import React, { Component } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap'
import logo from '../assets/logo.png'
import { BrowserRouter as Router, Switch, Route, Link}  from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

const divStyle = {
    marginLeft: '10px',
  };

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
                    <Container>
                        <Navbar.Brand href="/" >
                            <img
                                src={logo}
                                height="35"
                                width="35"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> Блог студента
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responisve-navbar-nav" >
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> Главная </Nav.Link>
                                <Nav.Link href="/about"> Обо мне</Nav.Link>
                                <Nav.Link href="/contacts"> Контакты </Nav.Link>
                                <Nav.Link href="/blog"> Блог</Nav.Link>
                            </Nav>
                            marginLeft
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Поиск"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info"> Поиск </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/blog" component={Blog} />
                    </Switch>
                </Router>
            </>
        )
    }
}
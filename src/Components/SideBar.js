import React, {Component, useRef} from 'react';
import {Home} from './Home.js';
import {About} from './About.js';
import {ProjectList} from './ProjectList';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

import * as Scroll from 'react-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export class Sidebar extends React.Component {
    render() {
        const routes = [
            {
                path:"/",
                exact: true,
                sidebar: () => <div>home</div>,
                main: () => <h3>home</h3>
            },
            {
                path:"/about",
                sidebar: () => <div>about</div>,
                main: () => <h3>About</h3>
            },
            {
                path:"/",
                sidebar: () => <div>experience</div>,
                main: () => <h3>Experience</h3>
            },
            {
                path:"/",
                sidebar: () => <div>projects</div>,
                main: () => <h3>Projects</h3>
            },
            {
                path:"/",
                sidebar: () => <div>photography</div>,
                main: () => <h3>Photography</h3>
            }
        ];
        
        return (
            <Router>
                <div className="wrapper">
                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <h1>Anna Zhou</h1>
                        </div>
                        <ul className="list-unstyled components">
                            <li>
                                <Link to="/">Experience</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <a target="blank" href="https://annazhou.pixieset.com/">Photography</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                
                <div id="hamNav">
                    <Navbar bg="light" expand="lg" className="hamColor">
                        <Navbar.Brand href="/">Anna Zhou</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link to="/" className="hamNavLinks">Home</Link>
                                <Link to="/about" className="hamNavLinks">About</Link>
                                <Nav.Link className="hamNavLinks" target="blank" href="https</ul>://annazhou.pixieset.com/">Photography</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
                </div>

                <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/about" component={About}></Route>
                </Switch>
            </Router>
        )
    }
}
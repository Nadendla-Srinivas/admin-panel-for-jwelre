import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, Button, FormControl, Row ,Col} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
/**
 * @author
 * @function Header
 **/

const Header = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                {/* <Navbar.Brand href="#home">Dashboard</Navbar.Brand>*/}
                <Link to="/" className="navbar-brand">
                    <h3>Jwelre</h3></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* <Nav className="mr-auto">

                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav> */}
                    <Nav>
                        <Row style={{ marginLeft: '50px' }}>                        
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-info">Search</Button>
                                </Form>
                           
                        </Row>
                        {/* 
                        <li className="nav-item active">
                            <NavLink to="signin" className="nav-link">Sign In</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
                        </li> */}
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}
export default Header;
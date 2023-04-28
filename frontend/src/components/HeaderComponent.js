import { Navbar, Nav, Container, NavDropdown, Badge, Form, Dropdown, DropdownButton, InputGroup, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand >E-Commerce</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <InputGroup>
                            <DropdownButton id="dropdown-basic-button" title="ALL">
                                <Dropdown.Item href="#/action-1">Electronics</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Books</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Microcontrollers</Dropdown.Item>
                            </DropdownButton>
                            <Form.Control type="text" placeholder='Search in shop' />
                            <Button variant="warning"><i className="bi bi-search"></i></Button>
                        </InputGroup>
                    </Nav>
                    <Nav>
                        <LinkContainer to="/admin/orders">
                            <Nav.Link>Admin</Nav.Link>
                        </LinkContainer>
                        <Nav.Link href="#pricing">
                            Price
                        </Nav.Link>
                        <NavDropdown title="Somkiat Jaidee" id="collasible-nav-dropdown">
                            <NavDropdown.Item evenKey="/user/my-orders" as={Link} to="/user/my-orders"> My orders </NavDropdown.Item>
                            <NavDropdown.Item evenKey="/user" as={Link} to="/user"> My profile </NavDropdown.Item>
                            <NavDropdown.Item> Logout </NavDropdown.Item>
                        </NavDropdown>
                        <LinkContainer to="/login">
                            <Nav.Link> Login </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/register">
                            <Nav.Link>Register</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <Nav.Link>
                                <Badge pill bg="danger">2</Badge>
                                <i className="bi bi-cart4 ms-1"></i>
                                <span className='ms-1'>CART</span>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderComponent;

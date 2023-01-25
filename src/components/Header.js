import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.png';
import { useLocation, NavLink } from 'react-router-dom';

const Header = (props) =>{
    return (<>
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/"><img src={logo} width="30" height="30" className='d-inline-block align-top' alt="logo" /><span>Manage Users</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                    <NavLink to='/users' className='nav-link'>Manage User</NavLink>
                </Nav>
                <Nav>
                    <NavDropdown title="Setting" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  </>)
}

export default Header;
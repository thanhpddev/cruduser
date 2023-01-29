import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useContext } from 'react';

import { UserContext } from '../context/userContext';

const Header = (props) =>{
    const { logout, user } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () =>{
        logout();
        navigate("/");
        toast.success('Log out success!')
    }

    return (<>
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/"><img src={logo} width="30" height="30" className='d-inline-block align-top' alt="logo" /><span>Manage Users</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {(user && user.auth || window.location.pathname === '/' || window.location.pathname === '/users') &&
                    <>
                        <Nav className="me-auto">
                            <NavLink to='/' className='nav-link'>Home</NavLink>
                            <NavLink to='/users' className='nav-link'>Manage User</NavLink>
                        </Nav>
                        
                        <Nav>
                            {user && user.email && <span className='nav-link'>Welcome {user.email}</span>}
                            {user && user.auth === true ? <Nav.Link className='nav-link' onClick={()=>handleLogout()}>Logout</Nav.Link> :
                            <NavLink to='/login' className='nav-link'>Login</NavLink>}
                        </Nav>
                    </>
                }
            </Navbar.Collapse>
        </Container>
    </Navbar>
  </>)
}

export default Header;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from "../cartWidget/index.jsx";
import '../NavBar/navBar.css'
import imgLogo from '../../imagenes/keyboardLogo.png'
import { NavLink } from 'react-router-dom';


function NavBar(){
  return (
    <Navbar className='navStyle bg-body-tertiary ' data-bs-theme="dark"  expand="lg">
    <Container  className='navBarElements'>
      <Navbar.Brand as={NavLink} to='/'> <img
              src={imgLogo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
            <Nav.Link className='navLink' as={NavLink} to='/'>Inicio</Nav.Link>
            <Nav.Link className='navLink' as={NavLink} to='/'>Todos los Productos</Nav.Link>
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
            <Nav.Link className='navLink' as={NavLink} to='/category/novedades'>Novedades</Nav.Link>
            <NavDropdown.Item  as={NavLink} to='/category/vendidos'>
             Más Vendidos
            </NavDropdown.Item>
            <NavDropdown.Item  as={NavLink} to='/category/free'>Free to Play</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
            <CartWidget></CartWidget>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}
export default NavBar
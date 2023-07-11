import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "../cartWidget/index.js";
import '../NavBar/navBar.css'
import imgLogo from '../../imagenes/keyboardLogo.png'


function NavBar(){
  return (
      <Navbar className='navStyle' data-bs-theme="dark"  style={{ padding: '10px' }}>
        <Container className='navBarElements'>
        <Navbar.Brand href="#home">
            <img
              src={imgLogo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='navLink' href="#home">Novedades</Nav.Link>
            <Nav.Link className='navLink' href="#features">Tienda</Nav.Link>
            <Nav.Link className='navLink' href="#pricing">Biblioteca</Nav.Link>
          </Nav>
            <CartWidget></CartWidget>
        </Container>
      </Navbar>
  );
}
export default NavBar
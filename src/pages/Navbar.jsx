import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

function BarraSuperior() {
  return (
    <div className='container-navbar'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <FontAwesomeIcon icon={faGamepad} /> MyGotys
          </Navbar.Brand>
          {/* Hace que aparezca el menú hamburguesa */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/SobreMi" className="nav-link">Sobre mí</Link>
              <NavDropdown title="Consolas" id="basic-nav-dropdown">
                <Link to="/PlayStation" className="dropdown-item">PlayStation</Link>
                <Link to="/Xbox" className="dropdown-item">Xbox</Link>
                <Link to="/Nintendo" className="dropdown-item">Nintendo Switch</Link>
                <NavDropdown.Divider />
                <Link to="/Retro" className="dropdown-item">Retro</Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BarraSuperior;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, responsiveFontSizes } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css';

function BarraSuperior() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
    // Aquí puedes realizar la lógica de envío del formulario
    const formData = new FormData(document.getElementById('registration-form'));
    const requestOptions = {
      method: 'POST',
      body: formData
    };

    try {
      const response = await fetch('http://localhost/mygotys.php', requestOptions);
      const data = await response.json();
      console.log(data); // Manejar la respuesta del servidor
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    }
  };

  return (
    <div className='container-navbar'>
      <Navbar expand="lg" style={{backgroundColor: '#e4e4e4'}} >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <FontAwesomeIcon icon={faGamepad} /> MyGotys
          </Navbar.Brand>
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

              <Button className="nav-link" onClick={handleClickOpen} style={{}}>Registrarse</Button>
              <Dialog open={open} onClose={handleClose}>
                <form id="registration-form" onSubmit={(event) => { event.preventDefault(); handleClose(); }}>
                  <DialogTitle>Regístrate</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Este registro es para poder comentar sobre los videojuegos que aparecen.
                    </DialogContentText>
                    <TextField
                      autoFocus
                      required
                      margin="dense"
                      id="email"
                      name="email"
                      label="Correo electrónico"
                      type="email"
                      fullWidth
                      variant="standard"
                    />
                    <TextField
                      required
                      margin="dense"
                      id="password"
                      name="password"
                      label="Contraseña"
                      type="password"
                      fullWidth
                      variant="standard"
                    />
                    <TextField
                      required
                      margin="dense"
                      id="name"
                      name="name"
                      label="Nombre de usuario"
                      type="text"
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancelar</Button>
                    <Button type="submit">Registrarme</Button>
                  </DialogActions>
                </form>
              </Dialog>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BarraSuperior;
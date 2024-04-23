import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

function BarraSuperior() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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

              <Button className="nav-link" onClick={handleClickOpen}>Login</Button>
              <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                  component: 'form',
                  onSubmit: (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    const email = formJson.email;
                    console.log(email);
                    handleClose();
                  },
                }}
              >
                <DialogTitle>Registráte</DialogTitle>
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
                    type="name"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit">Registrarme</Button>
                </DialogActions>
              </Dialog>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BarraSuperior;
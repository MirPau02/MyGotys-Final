import React from 'react';
import { Button } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <div className='container-footer'>
            <footer className="text-center" style={{ backgroundColor: '#22262d' }}>
                <div className="container pt-3">
                    <section className="mb-2">
                        <Button variant="light" className="text-light btn-floating m-1 rounded-circle" style={{ backgroundColor: '#3b5998' }}>
                            <FacebookIcon />
                        </Button>

                        <Button variant="light" className="text-light btn-floating m-1 rounded-circle" style={{ backgroundColor: '#55acee' }}>
                            <XIcon />
                        </Button>

                        <Button variant="light" className="text-light btn-floating m-1 rounded-circle" style={{ backgroundColor: '#dd4b39' }}>
                            <GoogleIcon />
                        </Button>

                        <Button variant="light" className="text-light btn-floating m-1 rounded-circle" style={{ backgroundColor: '#ac2bac' }}>
                            <InstagramIcon />
                        </Button>

                        <Button variant="light" className="text-light btn-floating m-1 rounded-circle" style={{ backgroundColor: '#0082ca' }}>
                            <LinkedInIcon />
                        </Button>

                        <Button variant="light" className="text-light btn-floating m-1 rounded-circle" style={{ backgroundColor: '#333333' }}>
                            <GitHubIcon />
                        </Button>
                    </section>
                </div>
                <div>
                    <small className="text-light">Derechos reservados</small>
                    <address className="pb-2 text-light">Tfno: +34 <br /> correo@gmail.com</address>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

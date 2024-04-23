import React from 'react';
import { Button } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {

    const handleCopyEmailToClipboard = (email) => {
        navigator.clipboard.writeText(email)
            .then(() => {
                console.log(`Correo electrónico ${email} copiado al portapapeles`);
                // Aquí podrías mostrar una notificación o mensaje de éxito si lo deseas
            })
            .catch((error) => {
                console.error('Error al copiar el correo electrónico al portapapeles:', error);
            });
    };

    const handleGoogleIconClick = () => {
        const email = 'paumirallesdiaz@gmail.com';
        handleCopyEmailToClipboard(email);
    };

    return (
        <div className='container-footer'>
            <footer className="text-center" style={{ backgroundColor: '#22262d' }}>
                <div className="container pt-3">
                    {/* //TODO Poner enlaces */}
                    <section className="mb-2">
                        <Button target='_blank' href='' variant="light" className="text-light btn-floating m-1 rounded-circle" style={{ backgroundColor: '#3b5998' }}>
                            <FacebookIcon />
                        </Button>

                        <Button target='_blank' href='' variant="light" className="text-light btn-floating m-1 rounded-circle" style={{ backgroundColor: '#55acee' }}>
                            <XIcon />
                        </Button>

                        <Button variant="light" className="text-light btn-floating m-1 rounded-circle" style={{ backgroundColor: '#dd4b39' }} onClick={handleGoogleIconClick}>
                            <GoogleIcon />
                        </Button>

                        <Button target='_blank' href='' variant="light" className="text-light btn-floating m-1 rounded-circle" style={{ backgroundColor: '#ac2bac' }}>
                            <InstagramIcon />
                        </Button>

                        <Button target='_blank' href='https://www.linkedin.com/in/pau-miralles-d%C3%ADaz-664a80278/' variant="light" className="text-light btn-floating m-1 rounded-circle" style={{ backgroundColor: '#0082ca' }}>
                            <LinkedInIcon />
                        </Button>

                        <Button target='_blank' href='https://github.com/MirPau02/MyGotys-Final.git' variant="light" className="text-light btn-floating m-1 rounded-circle" style={{ backgroundColor: '#333333' }}>
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

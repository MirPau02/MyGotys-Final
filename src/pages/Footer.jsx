import React from 'react';
import { Button } from 'react-bootstrap';
{/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"> */ }

function Footer() {
    return (
        <div className='container-footer'>
            <footer className="text-center" style={{ backgroundColor: '#22262d' }}>
                <div className="container pt-3">
                    {/* //TODO Arreglar aparición de iconos */}
                    <section className="mb-2">
                        <Button variant="light" className="text-light btn-floating m-1 rounded-circle" style={{ backgroundColor: '#3b5998' }}>
                            <i className="bi-facebook"></i>
                        </Button>

                        <Button variant="light" className="text-light btn-floating m-1 rounded-circle" style={{ backgroundColor: '#55acee' }}>
                            <i className="bi-twitter"></i>
                        </Button>

                        <Button variant="light" className="text-light btn-floating m-1 rounded-circle" style={{ backgroundColor: '#dd4b39' }}>
                            <i className="bi-google"></i>
                        </Button>

                        <Button variant="light" className="text-light btn-floating m-1 rounded-circle" style={{ backgroundColor: '#ac2bac' }}>
                            <i className="bi-instagram"></i>
                        </Button>

                        <Button variant="light" className="text-light btn-floating m-1 rounded-circle" style={{ backgroundColor: '#0082ca' }}>
                            <i className="bi-linkedin"></i>
                        </Button>

                        <Button variant="light" className="text-light btn-floating m-1 rounded-circle" style={{ backgroundColor: '#333333' }}>
                            <i className="bi-github"></i>
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
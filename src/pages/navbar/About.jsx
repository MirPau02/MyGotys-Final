import React from 'react'
import NavigationBar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import '../../styles/about.css'
import perfilPhoto from '../../logo.svg'

const About = () => {
    return (
        <div>
            <NavigationBar />
            {/* //TODO Poner foto de perfil, tamaño y que sea circular */}
            <div className='card-about'>
                <div className="card-image">
                    <img src={perfilPhoto} />
                </div>
                <div className="card-title">
                    <h4> Pau Miralles Díaz </h4>
                </div>
                <div className="card-description">
                    <p> Bienvenid@s a mi Proyecto Final de Grado basado en los famosos premios de videojuegos "The Game Awards" en los que se da el premio
                        a mejor juego del año "Game Of The Year" (GOTY) y he querido hacer algo similar pero personal para que la gente pueda ver
                        mis videojuegos favoritos, opinar sobre ellos, etc. </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
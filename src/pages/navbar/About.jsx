import React from 'react'
import NavigationBar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import '../../styles/about.css'

const About = () => {
    return (
        <div>
            <NavigationBar />
            <div className='card-about'>
                <div className="card-image">
                    <img src='../../../public/logo512.png' alt='Foto' />
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
            {/* <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Pau Miralles Díaz
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Descripción zzz
                    </Typography>
                </CardContent>
            </Card> */}
            <Footer />
        </div>
    )
}

export default About
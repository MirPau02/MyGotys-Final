import React from 'react'
import NavegationBar from '../Navbar.jsx';
import Footer from '../Footer.jsx'
import '../../styles/playstation.css'

const PlayStation = () => {
  return (
    <div>
      <NavegationBar />
      {/* //TODO Card PlayStation */}
      <div className='card-playstation'>
        <div className="card-image">
          <img src='' />
        </div>
        <div className="card-title">
          <h4> PlayStation 5 </h4>
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

export default PlayStation
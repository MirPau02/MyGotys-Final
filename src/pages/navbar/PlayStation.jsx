import React from 'react'
import Button from '@mui/material/Button';

import NavegationBar from '../Navbar.jsx';
import Footer from '../Footer.jsx'
import '../../styles/playstation.css'
import imagen from '../../img/ps5.jpeg'

const PlayStation = () => {
    return (
        <div>
            <NavegationBar />
            {/* //TODO Card PlayStation */}
            <div className='card-playstation'>
                <div className="card-image">
                    <img src={imagen} />
                </div>
                <div className="card-title">
                    <h4> PlayStation 5 </h4>
                </div>
                <div className="card-description">
                    <p> La PlayStation 5, o PS5, es la última consola de videojuegos
                        desarrollada por Sony Interactive Entertainment. Fue lanzada en noviembre de 2020 y representa un salto significativo en términos de potencia y capacidad
                        tecnológica con respecto a sus predecesoras. </p>
                </div>
                <div className="buttons-playstation">
                    <Button variant="outlined" size="small">
                        Componentes
                    </Button>
                    <Button variant="outlined" size="small" target='_blank' href='https://www.youtube.com/watch?v=qAFaLKstLPM'>
                        Vídeo Presentación
                    </Button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PlayStation
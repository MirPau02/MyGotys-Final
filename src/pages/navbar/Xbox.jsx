import React from 'react'
import Button from '@mui/material/Button';

import NavegationBar from '../Navbar.jsx';
import Footer from '../Footer.jsx'
import '../../styles/playstation.css'
import imagen from '../../img/seriesSX.jpg'

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
                    <h4> Xbox Series S/X </h4>
                </div>
                <div className="card-description">
                    <p> La Xbox Series X es una consola de videojuegos de última
                        generación desarrollada por Microsoft. Fue lanzada
                        en noviembre de 2020 como la sucesora de la Xbox One.
                        Mientras que la Xbox Series S es una consola de videojuegos de
                        gama media-alta que ofrece una experiencia de juego de calidad
                        a un precio más asequible en comparación con la Xbox Series X
                    </p>
                </div>
                <div className="buttons-playstation">
                    <Button variant="outlined" size="small" target='_blank' href='https://www.google.com/search?q=video+presentacion+xbox+series+sx&oq=video+presentacion+xbox+series+sx&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDQxMDRqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8#'>
                        Presentación Series X
                    </Button>
                    <Button variant="outlined" size="small">
                        Componentes
                    </Button>
                    <Button variant="outlined" size="small" target='_blank' href='https://www.youtube.com/watch?v=V_axU7XI4AE'>
                        Presentación Series S
                    </Button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PlayStation
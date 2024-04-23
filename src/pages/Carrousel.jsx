import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../img/axiom-verge.jpg'
import image2 from '../img/seaofStars.png'
import image3 from '../img/oriATWOTW.png'

const Carrousel = () => {
    return (
        //TODO Carousel de próximos juegos
        //TODO Carousel se recorre con imagenes de la BDD
        <div>
            <Carousel
                showStatus={false} //Indica 1/3 fotos, etc
                showIndicators={false} //Muestra puntos inferiores por los que puedes clickar
                showThumbs={false} //Hace que no salga la miniatura del carousel
                dynamicHeight={true} //Se ajusta al tamaño de la imagen
            >
                <div>
                    <img src={image1} />
                    <p className="legend">Hollow Knight Silksong</p>
                </div>
                <div>
                    <img src={image2} />
                    <p className="legend">Another's Crab Treasure</p>
                </div>
                <div>
                    <img src={image3} />
                    <p className="legend">No Rest For The Wicked</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Carrousel
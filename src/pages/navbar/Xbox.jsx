import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import NavegationBar from '../Navbar.jsx';
import Footer from '../Footer.jsx'
import '../../styles/xbox.css'
import imagen from '../../img/seriesSX.jpg'

const Xbox = () => {
    return (
        <div>
            <NavegationBar />
            <div className='card-xbox'>
                <Card sx={{ maxWidth: 500 }} style={{ margin: 20 }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={imagen}
                        title="Xbox"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" style={{ textAlign: 'center' }}>
                            Xbox Series S/X
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{ textAlign: 'justify' }}>
                            La Xbox Series X es una consola de videojuegos de última
                            generación desarrollada por Microsoft. Fue lanzada
                            en noviembre de 2020 como la sucesora de la Xbox One.
                            Mientras que la Xbox Series S es una consola de videojuegos de
                            gama media-alta que ofrece una experiencia de juego de calidad
                            a un precio más asequible en comparación con la Xbox Series X
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Button variant="outlined" size="small" target='_blank' href='https://www.google.com/search?q=video+presentacion+xbox+series+sx&oq=video+presentacion+xbox+series+sx&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDQxMDRqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8#'>
                            Series X
                        </Button>
                        <Button variant="outlined" size="small">
                            Componentes
                        </Button>
                        <Button variant="outlined" size="small" target='_blank' href='https://www.youtube.com/watch?v=V_axU7XI4AE'>
                            Series S
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <Footer />
        </div >
    )
}

export default Xbox
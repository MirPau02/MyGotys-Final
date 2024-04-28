import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import NavegationBar from '../Navbar.jsx';
import Footer from '../Footer.jsx'
import '../../styles/playstation.css'
import imagen from '../../img/ps5.jpeg'

const Playstation = () => {
    return (
        <div>
            <NavegationBar />
            <div className='card-playstation'>
                <Card sx={{ maxWidth: 500 }} style={{ margin: 20 }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={imagen}
                        title="Playstation"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" style={{ textAlign: 'center' }}>
                            PlayStation 5
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{ textAlign: 'justify' }}>
                        La PlayStation 5, o PS5, es la última consola de videojuegos
                        desarrollada por Sony Interactive Entertainment. Fue lanzada en 
                        noviembre de 2020 y representa un salto significativo en términos 
                        de potencia y capacidad tecnológica con respecto a sus predecesoras.
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Button variant="outlined" size="small" target='_blank' href='https://www.youtube.com/watch?v=qAFaLKstLPM'>
                            PlayStation 5
                        </Button>
                        <Button variant="outlined" size="small">
                            Componentes
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <Footer />
        </div >
    )
}

export default Playstation
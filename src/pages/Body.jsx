import React, { useState, useEffect } from 'react';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { obtenerJuegos } from '../api/api';
import '../styles/body.css';

const Body = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        cargarJuegos();
    }, []);

    const cargarJuegos = async () => {
        try {
            const juegos = await obtenerJuegos();
            console.log(juegos); // Verificar en la consola los juegos obtenidos
            setGames(juegos);
        } catch (error) {
            console.error('Error al cargar juegos:', error);
        }
    };

    return (
        <div className='container-body'>
            <Grid container spacing={2} className='grid-container'>
                {games.map((game) => (
                    <Grid key={game.id} item xs={12} sm={12} md={6} lg={4}>
                        <Card>
                            {/* Mostrar la imagen del juego */}
                            <CardMedia
                                component="img"
                                alt={game.title}
                                // height="140"
                                image={`data:image/jpeg;base64,${game.image}`} // Coloca la imagen base64 como fuente
                            />
                            {/* Contenido de la tarjeta */}
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {game.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Creador: {game.creator}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Plataforma: {game.platform}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Género: {game.genre}
                                </Typography>
                            </CardContent>
                            {/* Acciones de la tarjeta (botones) */}
                            {/* //TODO Grid container para cada botón*/}
                            <CardActions>
                                <Button variant="outlined" size="small" onClick={() => console.log(`Trailer de ${game.title}`)}>Trailer</Button>
                                <Button variant="outlined" size="small" onClick={() => console.log(`Descripción de ${game.title}`)}>Descripción</Button>
                                {/* Puedes implementar la lógica para mostrar comentarios */}
                                <Button variant="outlined" size="small" onClick={() => console.log(`Comentarios de ${game.title}`)}>Comentarios</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Body;
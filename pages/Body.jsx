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

    // Al hacer click te manda al trailer del juego
    const handleTrailerClick = (game) => {
        // Abre el trailer del juego en una nueva ventana
        if (game.trailer) {
            window.open(game.trailer, '_blank');
        } else {
            console.error(`No se encontró un trailer de ${game.title}`);
        }
        //Siempre habrá trailer en un principio
    };

    const handleDescriptionClick = (game) => {
        console.log(`Descripción de ${game.title}`);
        // Aquí puedes implementar la lógica para mostrar la descripción
    };

    const handleCommentsClick = (game) => {
        console.log(`Comentarios de ${game.title}`);
        // Aquí puedes implementar la lógica para mostrar los comentarios
    };

    return (
        <div className='container-body'>
            <Grid container spacing={2} className='grid-container'>
                {games.map((game) => (
                    <Grid key={game.id} item xs={12} sm={12} md={6} lg={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt={game.title}
                                // height="140"
                                image={`data:image/jpeg;base64,${game.image}`} // Coloca la imagen base64 como fuente
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {game.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Creador: {game.creator}
                                </Typography>
                                {/* <Typography variant="body2" color="text.secondary">
                                    Plataforma: {game.platform}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Género: {game.genre}
                                </Typography> */}
                            </CardContent>
                            <CardActions className="container-buttons">
                                <Button variant="outlined" size="small" onClick={() => handleTrailerClick(game)}>
                                    Trailer
                                </Button>
                                <Button variant="outlined" size="small" onClick={() => handleDescriptionClick(game)}>
                                    Descripción
                                </Button>
                                <Button variant="outlined" size="small" onClick={() => handleCommentsClick(game)}>
                                    Comentarios
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Body;

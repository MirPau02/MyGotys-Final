import React, { useState, useEffect } from 'react';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { obtenerJuegos } from '../api/api.js';
import '../styles/body.css';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Divider from '@mui/material/Divider';

const Body = () => {
    const [games, setGames] = useState([]);
    const [openDialog, setOpenDialog] = useState({});

    useEffect(() => {
        cargarJuegos();
    }, []);

    const cargarJuegos = async () => {
        try {
            const juegos = await obtenerJuegos();
            console.log(juegos); // Verificar en la consola los juegos obtenidos
            setGames(juegos);

            // Inicializa el estado del Dialog para cada juego como cerrado
            const initialOpenDialogState = juegos.reduce((acc, game) => {
                acc[game.id] = false;
                return acc;
            }, {});
            setOpenDialog(initialOpenDialogState);
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
    };

    const handleOpenDescription = (gameId) => {
        setOpenDialog(e => ({ ...e, [gameId]: true }));
    };
    const handleCloseDescription = (gameId) => {
        setOpenDialog(e => ({ ...e, [gameId]: false }));
    };

    const handleCommentsClick = (game) => {
        console.log(`Comentarios de ${game.title}`);
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
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {game.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Desarrolladora: {game.creator}
                                </Typography>
                            </CardContent>
                            <div className='buttons-options-card'>
                                <CardActions>
                                    <Button variant="outlined" size="small" onClick={() => handleTrailerClick(game)}>
                                        Trailer
                                    </Button>
                                    <Button variant="outlined" size="small" onClick={() => handleOpenDescription(game.id)}>
                                        Descripción
                                    </Button>
                                    <Button variant="outlined" size="small" onClick={() => handleCommentsClick(game)}>
                                        Comentar
                                    </Button>
                                </CardActions>
                            </div>
                        </Card>
                        <div className="dialog-description">
                            <Dialog
                                open={openDialog[game.id]}
                                onClose={() => handleCloseDescription(game.id)}
                            >
                                <DialogTitle id="alert-dialog-title" className='justify-center'>
                                    {game.title}
                                </DialogTitle>
                                <Divider />
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        <Typography variant="body2" color="text.secondary">
                                            <strong>Plataforma:</strong> {game.platform}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <strong>Género:</strong> {game.genre}
                                        </Typography>
                                        <Typography variant="body1" color="text.primary">
                                            {game.description}
                                        </Typography>
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={() => handleCloseDescription(game.id)}>Cerrar</Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Body;

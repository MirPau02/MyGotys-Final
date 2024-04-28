import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Dialog, DialogContent, DialogTitle, Grid } from '@mui/material';
import NavegationBar from '../Navbar.jsx';
import Footer from '../Footer.jsx';
import '../../styles/xbox.css';
import imagen from '../../img/seriesSX.jpg';

const Xbox = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

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
                        <Button variant="outlined" size="small" target='_blank' href='https://www.youtube.com/watch?v=0tUqIHwHDEc'>
                            Series X
                        </Button>
                        <Button variant="outlined" size="small" onClick={handleOpenDialog}>
                            Especificaciones
                        </Button>
                        <Button variant="outlined" size="small" target='_blank' href='https://www.youtube.com/watch?v=V_axU7XI4AE'>
                            Series S
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <Footer />
            <Dialog open={dialogOpen} onClose={handleCloseDialog}>
                <DialogTitle style={{ display: 'flex', justifyContent: 'center' }}>Xbox Series S/X - Especificaciones</DialogTitle>
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={6}>
                            <Typography variant="h6" style={{ textAlign: 'center' }}>
                                Xbox Series X
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ textAlign: 'justify' }}>
                                <p>Procesador: 8 AMD Zen 2 CPU cores at 3.8 GHz, 3.6 GHz con SMT habilitado</p>
                                <p>Gráfica: AMD RDNA 2 GPU, 52 CUs a 1.825 GHz</p>
                                <p>Almacenamiento: 1TB PCle Gen 4 NVME SSD, 2,4GB/s sin comprimir, 4,8GB/s comprimido</p>
                                <p>Unidad óptica: 4K UHD Blu-ray</p>
                                <p>Objetivo de rendimiento: 4K a 60 FPS, hasta 120 FPS</p>
                                <p>Precio: 499€</p>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Typography variant="h6" style={{ textAlign: 'center' }}>
                                Xbox Series S
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ textAlign: 'justify' }}>
                                <p>Procesador: 8-core AMD Zen 2 CPU at 3.6 GHz, 3.4 GHz con SMT habilitado</p>
                                <p>Gráfica: AMD RDNA 2 GPU 20 CUs a 1.565 GHz</p>
                                <p>Almacenamiento: 512 GB PCle Gen 4 NVME SSD, 2,4GB/s sin comprimir, 4,8GB/s comprimido</p>
                                <p>Unidad óptica: Sin lector</p>
                                <p>Objetivo de rendimiento: 1440p a 60 FPS, hasta 120 FPS</p>
                                <p>Precio: 299€</p>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Button variant="outlined" onClick={handleCloseDialog}> Cerrar </Button>
                </DialogContent>
            </Dialog>
        </div >
    );
};

export default Xbox;

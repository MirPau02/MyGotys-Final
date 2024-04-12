import React from 'react'

import { Grid, Item } from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import '../styles/body.css'

const Body = () => {
    return (
        <div className='container-body'>
            <Grid container spacing={2} className='grid-container'>
                {/* //TODO Mirar que tamaño pongo para Responsive */}
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    {/* //TODO manejar el maxWidth en una clase de CSS para manejar todas las cards */}
                    <Card className='card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                        />
                        <CardContent>
                            {/* Título */}
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            {/* Desarrolladora */}
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        {/* Botones */}
                        <CardActions style={{ justifyContent: 'space-evenly' }}>
                            <Button variant="outlined" size="small">Trailer</Button>
                            <Button variant="outlined" size="small">Descripción</Button>
                            <Button variant="outlined" size="small">Comentarios</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Card className='card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Card className='card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4}>
                    {/* //TODO manejar el maxWidth en una clase de CSS para manejar todas las cards */}
                    <Card className='card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                        />
                        <CardContent>
                            {/* Título */}
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            {/* Desarrolladora */}
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        {/* Botones */}
                        <CardActions style={{ justifyContent: 'space-evenly' }}>
                            <Button variant="outlined" size="small">Trailer</Button>
                            <Button variant="outlined" size="small">Descripción</Button>
                            <Button variant="outlined" size="small">Comentarios</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Card className='card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Card className='card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Body
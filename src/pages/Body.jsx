import React, { useState } from 'react'

import { Grid } from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import '../styles/body.css'

const Body = () => {

    const [openDialog, setOpenDialog] = useState();

    const videogames = [
        {
            "title": "Outer Wilds",
            "description": "Outer Wilds es un juego de mundo abierto donde el misterio gira en torno a un sistema solar atrapado en un bucle de tiempo",
            "date": "28/05/2019",
            "creator": "Marijn Haverbeke",
            "image": "img/outer-wilds.png",
            "platform": "PC, PlayStation, Xbox y Switch",
            "genre": "",
            "trailer": "https://www.youtube.com/watch?v=LP1RN9Xg5lQ&pp=ygUZZmlyc3QgdHJhaWxlciBvdXRlciB3aWxkcw%3D%3D"
        },
        {
            "title": "Cuphead",
            "description": "Eloquent JavaScript, Second Edition",
            "date": "XX/XX/XXXX",
            "creator": "Studio MDHR",
            "image": "img/cuphead.png",
            "platform": "PC, PlayStation, Xbox y Switch",
            "genre": "",
            "trailer": "https://www.youtube.com/watch?v=v80_FwbAv_s&pp=ygUVZmlyc3QgdHJhaWxlciBjdXBoZWFk"
        },
        {
            "title": "Ori And The Will Of The Wisps",
            "description": "",
            "date": "XX/XX/XXXX",
            "creator": "Moon Studios",
            "image": "img/oriATWOTW.png",
            "platform": "PC, Xbox y Switch",
            "genre": "",
            "trailer": "https://www.youtube.com/watch?v=2kPSl2vyu2Y&pp=ygUrZmlyc3QgdHJhaWxlciBPcmkgQW5kIFRoZSBXaWxsIE9mIFRoZSBXaXNwcw%3D%3D"
        },
        {
            "title": "Little Nightmares 2",
            "description": "",
            "date": "XX/XX/XXXX",
            "creator": "Tarsier Studio",
            "image": "img/littleNightmares2.png",
            "platform": "PC, PlayStation, Xbox y Switch",
            "genre": "",
            "trailer": "https://www.youtube.com/watch?v=quP1qzwFGas&pp=ygUhZmlyc3QgdHJhaWxlciBsaXR0bGUgbmlnaHRtYXJlcyAy"
        },
        {
            "title": "Sea Of Stars",
            "description": "Sea of ​​Stars cuenta la historia de dos Hijos del Solsticio que combinarán los poderes del sol y la luna para realizar la Magia del Eclipse.",
            "date": "29/08/2023",
            "creator": "Sabotage Studio",
            "image": "../img/seaofStars.png",
            "platform": "PC, PlayStation, Xbox y Switch",
            "genre": "Aventura, Indie, Rol",
            "trailer": "https://www.youtube.com/watch?v=LP1RN9Xg5lQ&pp=ygUZZmlyc3QgdHJhaWxlciBvdXRlciB3aWxkcw%3D%3D"
        },
        {
            "title": "The Last Of Us 2",
            "description": "Naughty Dogs",
            "date": "28/05/XXXX",
            "creator": "Marijn Haverbeke",
            "image": "MyGotys-Final/src/img/TLOU2.png",
            "platform": "PlayStation",
            "genre": "",
            "trailer": "https://www.youtube.com/watch?v=LP1RN9Xg5lQ&pp=ygUZZmlyc3QgdHJhaWxlciBvdXRlciB3aWxkcw%3D%3D"
        }
    ];

    return (
        <div className='container-body'>
            {/* //TODO Mirar que tamaño pongo para Responsive */}
            {/* //TODO manejar el maxWidth en una clase de CSS para manejar todas las cards */}
            {/* //TODO Array de una Card para que salgan todas */}
            <Grid container spacing={2} className='grid-container'>
                {videogames.map((game, index) => (
                    <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
                        <Card className='card' style={{ height: '300px' }}>
                            <div className="card-image">
                                <CardMedia
                                    component="img"
                                    alt={game.title}
                                    height="140"
                                    // src={game.image}
                                    image={game.image}
                                />
                            </div>
                            <div className="card-content">
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div">
                                        {game.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {game.creator}
                                    </Typography>
                                </CardContent>
                            </div>
                            <div className="card-buttons">
                                <CardActions style={{ justifyContent: 'space-evenly' }}>
                                    <Button variant="outlined" size="small">Trailer</Button>
                                    <Button variant="outlined" size="small">Descripción</Button>
                                    {/* onClick={setOpenDialog(true)} */}
                                    <Button variant="outlined" size="small">Comentarios</Button>
                                </CardActions>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Body
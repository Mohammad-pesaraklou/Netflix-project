import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import requests from '../services/Request';
// styles
import styles from  './styles/Main.module.css'
import Navbar from './Navbar';
import { Button, Grid, Typography } from '@mui/material';
import { shorten } from '../Helper/Function';
import { shortenDes } from '../Helper/Function';

const Main = () => {
    
    const [movies,setMovies] = useState([]);
    
    useEffect(() => {
        axios.get(requests.requestPopular).then(response => {
            setMovies(response.data.results)
        })
    }, [])
    
    // console.log(movies)

    const movie = movies[Math.floor(Math.random() * movies.length)];
    

    return (
        <Grid container>
        <div className={styles.container}>
            <div>
                <div className={styles.overlay}></div>
                <img className={styles.imgCont} src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" />
            </div>
            <div className={styles.title}>
                <Typography fontWeight={600} fontFamily='Lato' variant='h2' color={'#fefefe'}>
                    {/* {shorten(movie?.original_title)} */}
                    {movie?.original_title}
                </Typography>
                <div className={styles.btnContainer}>
                    <Button variant="contained" color="secondary" fontFamily='Lato'>Play</Button>
                    <Button variant="outlined" color="secondary" fontFamily='Lato'>Watch later</Button>
                </div>
                <Typography fontWeight={500} fontFamily='Lato' variant='h6' color={"#fefefe"}>Released: {movie?.release_date}</Typography>
                <Typography fontFamily='Lato' color="secondary" variant="h6" >
                {/* {shortenDes(movie?.overview, 150)} */}
                {
                      movie?.overview.length > 150 ?
                      movie?.overview.slice(0, 150) + '...' :
                     movie?.overview
                }
                </Typography>
            </div>
        </div>
        </Grid>
    );
};

export default React.memo(Main);
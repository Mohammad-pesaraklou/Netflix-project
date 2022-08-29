import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import requests from '../services/Request';
// styles
import styles from  './styles/Main.module.css'
import Navbar from './Navbar';
import { Button, Typography } from '@mui/material';
import { shorten } from '../Helper/Function';



const Main = () => {
    
    const [movies,setMovies] = useState([]);
    
    useEffect(() => {
        axios.get(requests.requestPopular).then(response => {
            setMovies(response.data.results)
        })
    }, [])
    
    console.log(movies)

    const movie = movies[Math.floor(Math.random() * movies.length)];
    
    console.log(movie)

    const shortenDes = (str,num) => {
        if(str.length > num){
           return str.slice(0, num) + '...';
        }else{
            return str;
        }
    }

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.overlay}></div>
                <img className={styles.imgCont} src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" />
            </div>
            <div className={styles.title}>
                <Typography fontFamily='Lato' variant='h2' color={'#fefefe'}>
                    {shorten(movie?.original_title)}
                </Typography>
                <div className={styles.btnContainer}>
                    <Button variant="outlined" color="secondary" fontFamily='Lato'>Play</Button>
                    <Button variant="contained" color="secondary" fontFamily='Lato'>Watch later</Button>
                </div>
                <Typography fontFamily='Lato' variant='h6' color={"#696464"}>Released: {movie?.release_date}</Typography>
                <Typography fontFamily='Lato' color="secondary" variant="h6">
                {shortenDes(movie?.overview, 150)}
                </Typography>
            </div>
        </div>
    );
};

export default Main;
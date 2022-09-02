import React, { useContext, useEffect, useState } from 'react';
import { Button, CircularProgress, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
//CONTEXT
import { CartContext } from '../context/CartContextProvider';
//STYLE
import styles from './styles/Details.module.css'



const DetailsMovie = () => {

    const { state, dispatch } = useContext(CartContext);
    const [movie, setMovie] = useState([])
    const params = useParams()


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=921f2cc6357d54f841df004fb0f544cb&language=en-US`)
            .then(res => {
                setMovie(res.data)
            })
    }, [])

    if (!movie) return <CircularProgress sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} size={"40"} color='warning' />


    return (
        <div className={styles.container}>
            <div className={styles.overlay}></div>
            <img className={styles.imgCont} src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" />


            <div className={styles.text}>
                <Typography fontWeight={700} fontFamily={"Lato"} sx={{ fontSize: { xs: '28px', sm: '48px' } }} color={"#ffffff"}>
                    {movie?.title}
                </Typography>

                <Typography mt={2} fontWeight={700} fontFamily={"Lato"} variant='h5' color={"#fde024"}>
                    {movie?.tagline}
                </Typography>
                <div onClick={() => dispatch({ type: "ADD_ITEM", payload: movie })}>
                    <Button variant="contained" sx={{ width: '170px', mt: 2, bgcolor: "#fde024", color: 'black' }}>Watch later</Button>
                </div>
            </div>
            <div className={styles.details}>
                <Typography ml={3} fontWeight={500} fontFamily={"Lato"} variant='h3' color={"#fde024"}>
                    overview
                </Typography>
                <div>
                    <Typography mt={2} ml={3} fontWeight={500} fontFamily={"Lato"} variant='h6' color={"#ffffff"}>
                        {movie?.overview}
                    </Typography>
                </div>

                <Typography ml={3} mt={2} fontWeight={500} fontFamily={"Lato"} variant='h6' color={"#fde024"}>
                    IMDb:<span className={styles.spn}>{movie?.vote_average}</span>
                </Typography>
                <div className={styles.genre}>
                    <Typography ml={3} mt={2} fontWeight={500} fontFamily={"Lato"} variant='h5' color={"#fde024"}>
                        Movie Time:
                    </Typography>
                    <Typography sx={{ textTransform: 'capitalize' }} mt={2} ml={1} fontWeight={500} fontFamily={"Lato"} variant='h6' color={"#ffffff"}>
                        {movie?.runtime}min
                    </Typography>
                </div>
                <div className={styles.genre}>
                    <Typography ml={3} mt={2} fontWeight={500} fontFamily={"Lato"} variant='h5' color={"#fde024"}>
                        Language:
                    </Typography>
                    <Typography sx={{ textTransform: 'capitalize' }} mt={2} ml={1} fontWeight={500} fontFamily={"Lato"} variant='h6' color={"#ffffff"}>
                        {movie?.original_language}
                    </Typography>
                </div>
                <div className={styles.genre}>
                    <Typography ml={3} mt={2} fontWeight={500} fontFamily={"Lato"} variant='h5' color={"#fde024"}>
                        Status:
                    </Typography>
                    <Typography sx={{ textTransform: 'capitalize' }} mt={2} ml={1} fontWeight={500} fontFamily={"Lato"} variant='h6' color={"#ffffff"}>
                        {movie?.status}
                    </Typography>
                </div>
                <div className={styles.genre} style={{ marginBottom: '5rem' }}>
                    <Typography ml={3} mt={2} fontWeight={500} fontFamily={"Lato"} variant='h5' color={"#fde024"}>
                        Release Date:
                    </Typography>
                    <Typography sx={{ textTransform: 'capitalize' }} mt={2} ml={1} fontWeight={500} fontFamily={"Lato"} variant='h6' color={"#ffffff"}>
                        {movie?.release_date}
                    </Typography>
                </div>
            </div>

        </div>
    );
};

export default React.memo(DetailsMovie);
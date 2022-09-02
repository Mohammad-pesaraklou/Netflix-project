import React, { useEffect, useState, useContext } from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
//carousel
import AliceCarousel from "react-alice-carousel";
// styles
import styles from './styles/Row.module.css';
//context
import { CartContext } from '../context/CartContextProvider';


const Row = ({ title, fetchURL }) => {

    const { state, dispatch } = useContext(CartContext);

    const [like, setLike] = useState(false)
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(fetchURL)
            .then(res => {
                setData(res.data.results)
            })
    }, [fetchURL])


    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 3,
        },

        1000: {
            items: 4
        },
        1250: {
            items: 5
        }
    };


    const items = data?.map(item => {
        return (
            <div className={styles.sliderContainer}>

                <Link className={styles.sliderContainer} to={`/details/${item.id}`}>
                    <div className={styles.overlay}></div>
                    <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                        className={styles.imgSlider}
                        alt="" />

                    <div className={styles.slidTitle}>
                        <p>
                            {item?.title}
                        </p>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <div className={styles.container}>
            <Typography color={"#fefefe"} variant="h5" p={2}>
                {title}
            </Typography>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                //  disableDotsControls
                disableButtonsControls
                responsive={responsive}
                items={items}
                autoPlay
            />

        </div>
    );
};

export default React.memo(Row);
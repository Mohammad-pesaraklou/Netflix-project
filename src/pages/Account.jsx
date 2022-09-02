import { Typography } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import AliceCarousel from "react-alice-carousel";

//context
import { CartContext } from '../context/CartContextProvider';
//styles
import styles from './styles/Account.module.css';


const Account = () => {
    
    const {state,dispatch} = useContext(CartContext)
    console.log(state)


    const items = state?.selectedItems.map(item => {
        return(
            <div className={styles.sliderContainer}>

            <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                className={styles.imgSlider}
                alt="" />
            <div className={styles.overlaySlider}></div>

            <div className={styles.slidTitle}>
                <p>
                    {item?.title}
                </p>
            </div>
        </div>
        )
    });

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

    return (
        <div className={styles.container}>
            <img className={styles.imgAc} src={"https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/7e9b18f2-a5a4-4bb5-b2b3-c32fd6c1501b/NL-en-20220822-popsignuptwoweeks-perspective_alpha_website_small.jpg"} alt="netflix" />
            <div className={styles.overlay}></div>
            <div className={styles.text}>
                <Typography fontWeight={500} variant="h2" color={"#ffffff"} fontFamily="Lato">
                    My Shows
                </Typography>
            </div>
            <div className={styles.aliceContainer}>
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
        </div>
    );
};

export default React.memo(Account);
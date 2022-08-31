import React from 'react';
import { Button, Typography } from '@mui/material';
//styles
import styles from './styles/Navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link className={styles.navLink} to="/">
                <Typography fontFamily={"Lato"} sx={{ cursor: "pointer" }} variant='h3' color={"#e50914"}>
                    NETFLIX
                </Typography>
            </Link>
            <div className={styles.btnContainer}>
                <Link className={styles.navLink} to="/login">
                <Button fontFamily={"Lato"} variant='outlined'>Sign In</Button>
                </Link>
                <Link className={styles.navLink} to="/signup">
                <Button fontFamily={"Lato"} variant='contained'>Sign Up</Button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
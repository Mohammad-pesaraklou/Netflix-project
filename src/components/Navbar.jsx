import React from 'react';
import { Button, Typography } from '@mui/material';
//styles
import styles from './styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Typography fontFamily={"Lato"} sx={{cursor: "pointer"}} variant='h3' color={"#e50914"}>
                Movie Land
            </Typography>
            <div className={styles.btnContainer}>
            <Button fontFamily={"Lato"} variant='outlined'>Sign In</Button>
            <Button fontFamily={"Lato"} variant='contained'>Sign Up</Button>
            </div>
        </div>
    );
};

export default Navbar;
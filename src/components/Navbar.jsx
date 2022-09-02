import React from 'react';
import { Button, Typography } from '@mui/material';
//styles
import styles from './styles/Navbar.module.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';

const Navbar = () => {


    const { user, logout } = useContext(AuthContext);


    const logoutHandler = async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.navbar}>
            <Link className={styles.navLink} to="/">
                <Typography fontFamily={"Lato"} sx={{ cursor: "pointer" }} variant='h3' color={"#e50914"}>
                    NETFLIX
                </Typography>
            </Link>
            {
                user?.email ?
                    <div className={styles.btnContainer}>
                        <Link className={styles.navLink} to="/account">
                            <Button fontFamily={"Lato"} variant='outlined'>Account</Button>
                        </Link>
                        <Button fontFamily={"Lato"} variant='contained' onClick={logoutHandler}>Logout</Button>
                    </div>
                    :
                    <div className={styles.btnContainer}>
                        <Link className={styles.navLink} to="/login">
                            <Button fontFamily={"Lato"} variant='outlined'>Sign In</Button>
                        </Link>
                        <Link className={styles.navLink} to="/signup">
                            <Button fontFamily={"Lato"} variant='contained'>Sign Up</Button>
                        </Link>
                    </div>
            }

        </div>
    );
};

export default Navbar;
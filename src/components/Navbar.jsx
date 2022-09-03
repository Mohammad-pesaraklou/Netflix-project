import React, { useContext } from 'react';
import { Button, Typography } from '@mui/material';
//styles
import styles from './styles/Navbar.module.css'
import { Link } from 'react-router-dom';
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
                <Typography fontFamily={"Lato"} sx={{ cursor: "pointer",fontSize: {xs: '28px',sm: '38px',md: '46px',lg: '52px'} }}  color={"#e50914"}>
                    NETFLIX
                </Typography>
            </Link>
            {
                user?.email ?
                    <div className={styles.btnContainer}>
                        <Link className={styles.navLink} to="/account">
                            <Button type='submit' fontFamily={"Lato"} variant='outlined'>Account</Button>
                        </Link>
                        <Button type='submit' fontFamily={"Lato"} variant='contained' onClick={logoutHandler}>Logout</Button>
                    </div>
                    :
                    <div className={styles.btnContainer}>
                        <Link className={styles.navLink} to="/login">
                            <Button type='submit' fontFamily={"Lato"} variant='outlined'>Sign In</Button>
                        </Link>
                        <Link className={styles.navLink} to="/signup">
                            <Button type='submit' fontFamily={"Lato"} variant='contained'>Sign Up</Button>
                        </Link>
                    </div>
            }

        </div>
    );
};

export default Navbar;
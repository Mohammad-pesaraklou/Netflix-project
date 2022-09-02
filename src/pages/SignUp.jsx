import React, { useState, useContext } from 'react';
import { ToastContainer } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
import { notify } from './Toastify';
// CONTEXT
import { AuthContext } from '../context/AuthContextProvider';
// STYLE
import styles from './styles/SignUp.module.css'

const SignUp = () => {

    const { user, signIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();



    const submitHandler = async event => {
        event.preventDefault();
        setError('')
        try {
            await signIn(email, password)
            notify("you sign up successfully", "success");
            navigate('/')
        } catch (error) {
            notify("Invalid Data!", "error");
            setError(error.message)
            console.log(error);
        }
    }


    return (
        <div className={styles.mainCont}>
            <img className={styles.imgN} src={"https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/7e9b18f2-a5a4-4bb5-b2b3-c32fd6c1501b/NL-en-20220822-popsignuptwoweeks-perspective_alpha_website_small.jpg"} alt="netflix" />
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <form onSubmit={submitHandler} className={styles.fromContainer}>
                    <h2 className={styles.header}>SignUp</h2>
                    {error ? <h3 className={styles.errMsg}>{error}</h3> : null}
                    <div className={styles.filed}>
                        <label>Email</label>
                        <input
                            type='text'
                            name='email'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>


                    <div className={styles.filed}>
                        <label>Password</label>
                        <input
                            type='password'
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>


                    <div className={styles.btns}>
                        <Link to='/login'>LOGIN</Link>
                        <button type='submit'>SIGN UP</button>
                    </div>

                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default SignUp;
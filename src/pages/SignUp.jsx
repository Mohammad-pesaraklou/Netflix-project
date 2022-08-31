import React, { useEffect, useState } from 'react';
import { validate } from './validate'
import styles from './styles/SignUp.module.css'
import { ToastContainer } from 'react-toastify'
import Toastify from './Toastify'
import { Link } from 'react-router-dom';
import { notify } from './Toastify';

const SignUp = () => {
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})
    const [data, setData] = useState({
        email: "",
        password: "",
    });


    const changHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    }


    const focusHandler = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {

            notify("you sign up successfully", "success");

        } else {
            notify("Invalid Data!", "error");

            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isChecked: true,
            })

        }
    }

    useEffect(() => {
        setErrors(validate(data, "SignUp"))
    }, [data, touched])


    return (
        <div className={styles.mainCont}>
            <img className={styles.imgN} src={"https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/7e9b18f2-a5a4-4bb5-b2b3-c32fd6c1501b/NL-en-20220822-popsignuptwoweeks-perspective_alpha_website_small.jpg"} alt="netflix" />
            <div className={styles.overlay}></div>
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.fromContainer}>
                <h2 className={styles.header}>SignUp</h2>

                <div className={styles.filed}>
                    <label>Email</label>
                    <input className={(errors.email && touched.email) ? styles.unCompleted : styles.completed}
                        type='text' name='email' value={data.email} onChange={changHandler} onFocus={focusHandler} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>


                <div className={styles.filed}>
                    <label>Password</label>
                    <input className={(errors.password && touched.password) ? styles.unCompleted : styles.completed}
                        type="password" name="password" value={data.password} onChange={changHandler} onFocus={focusHandler} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
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
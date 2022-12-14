import React from 'react';
import { createContext } from 'react';
import { auth, db } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({});

    function signIn(email, password) {
        createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])


    return (
        <AuthContext.Provider value={{ user, signIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );


};
export default AuthContextProvider;
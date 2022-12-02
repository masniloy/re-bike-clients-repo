import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true);

    const createUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const signIn = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);


    }
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);

    }


    const logOut = () => {
        setLoding(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoding(false);
        }));
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
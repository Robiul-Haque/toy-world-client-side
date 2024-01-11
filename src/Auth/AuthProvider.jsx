/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [loginUser, setLoginUser] = useState(null);
    const [loadingSpinner, setLoadingSpinner] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('auth state changed', currentUser);
            setLoadingSpinner(false);
            setLoginUser(currentUser);
        });
        return () => {
            return unSubscribe();
        }
    })

    const googleProvider = new GoogleAuthProvider();

    const registration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailPassLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }


    const authInfo = {
        registration,
        emailPassLogin,
        googleLogin,
        loginUser,
        loadingSpinner,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
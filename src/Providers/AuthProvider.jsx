import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);


    //----------------------//
    // creat a new user //
    //----------------------//
    const creatUser = (email, password) => {
        console.log(email, password);
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //--------------------//
    // Sign in user //
    //--------------------//
    const logInUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    //--------------------//
    // Log out user //
    //--------------------//
    const updateUserProfule = (user, name, photo) => {
        return updateProfile(user, {
            displayName: name, photoURL: photo
        })
    }


    //--------------------//
    // GOOGLE LOG IN USER //
    //--------------------//
    const googlePrivder = new GoogleAuthProvider()
    const googleLogin = () => {
        return signInWithPopup(auth, googlePrivder)
    }


    //--------------------//
    // Log out user //
    //--------------------//
    const logOutUser = () => {
        setLoding(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        loding,
        creatUser,
        logInUser,
        updateUserProfule,
        googleLogin,
        logOutUser
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            console.log(user);
            setLoding(false)
            const currentUser = user;
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                    .then(data => {
                        console.log(data.data.token);
                        localStorage.setItem('secret-token',data.data.token)
                    })
            }
            else{
                localStorage.removeItem('secret-token')
            }
        })

        return () => {
            return unsubscribe()
        }
    }, [])




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
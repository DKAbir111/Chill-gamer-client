import { AuthContext } from "../Context/AuthContext";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { useEffect, useState } from "react";


export default function AuthProvider({ children }) {
    const provider = new GoogleAuthProvider()
    const [loading, setLoading] = useState(true)
    const [darkMode, setDarkMode] = useState(false)

    //inser user info in database
    const DbUserInfo = (user) => {
        fetch('https://chill-gamer-server-sandy.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    return;
                }
            })
    }
    const [user, setUser] = useState(null)
    //google sign in
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // state observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    //sign in with email and paswords
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Sign out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    //cteate user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //handleTheme
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const authInfo = {
        googleSignIn,
        user,
        logOut,
        createUser,
        signIn,
        loading,
        DbUserInfo,
        handleDarkMode,
        darkMode
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
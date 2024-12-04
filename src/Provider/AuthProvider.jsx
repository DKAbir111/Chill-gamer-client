import { AuthContext } from "../Context/AuthContext";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { useEffect, useState } from "react";


export default function AuthProvider({ children }) {
    const provider = new GoogleAuthProvider()

    const [user, setUser] = useState(null)
    //google sign in
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }
    // state observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
        return () => unsubscribe();
    }, [])

    //Sign out
    const logOut = () => {
        return signOut(auth)
    }
    //cteate user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        googleSignIn,
        user,
        logOut,
        createUser
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
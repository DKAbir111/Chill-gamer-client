import { AuthContext } from "../Context/AuthContext";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default function AuthProvider({ children }) {
    const provider = new GoogleAuthProvider()
    const [loading, setLoading] = useState(true)


    //inser user info in database
    const DbUserInfo = (user) => {
        fetch('http://localhost:5001/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("User created successfully")
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
    const authInfo = {
        googleSignIn,
        user,
        logOut,
        createUser,
        signIn,
        loading,
        DbUserInfo
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
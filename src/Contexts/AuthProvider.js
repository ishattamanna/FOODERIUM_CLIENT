import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import app from "../Config/firebase.config";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const gitHubProvider = new GithubAuthProvider();



const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const authUser = "Mimo";

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    };

    const gitHubSignIn = () => {
        return signInWithPopup(auth, gitHubProvider)
    };

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const userProfileUpdate = (userName, profilePic) => {
        return updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: profilePic,
        });
    };

    const authInfo = {
        authUser,
        googleSignIn,
        gitHubSignIn,
        createAccount,
        logIn,
        userProfileUpdate,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};



export default AuthProvider;
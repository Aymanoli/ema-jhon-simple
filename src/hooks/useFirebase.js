import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
// import initializeAuthentication from "../Firebase/firebase.init";
import initializeAuthentication from "../Firebase/FIrebase.init";


initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider =  new GoogleAuthProvider();

    const singInUseingGoogle = () =>{
       return signInWithPopup(auth, googleProvider)
        
    }

    const logOut = () =>{
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }
    // observe whether user auth state changed or 
    useEffect( () =>{
        onAuthStateChanged(auth, (user) =>{
            if(user) {
                setUser(user);
            }
        });
    }, [])

    return{
        user, 
        singInUseingGoogle,
        logOut
    }
}

export default useFirebase;
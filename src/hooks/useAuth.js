import React, { useState, useEffect, useContext, createContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: "",
    appID: ""
});

const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
    return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signout = () => {
        return firebase.auth().signOut().then(() => {
            setUser(false);
        });
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user)
                setUser(user);
            else 
                setUser(false);
        });
        return () => unsubscribe();
    }, []);
  
    return {
        user,
        signout
    };
}
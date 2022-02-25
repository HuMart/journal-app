import { app, googleAuthProvider } from "../firebase/firebase-config";
import { getAuth, signInWithPopup } from 'firebase-auth';

import { types } from "../types/types";

export const startLoginEmailPassword = ( email, password ) => {
    return (dispatch) => {

        setTimeout(() => {
            dispatch( login( 123, "Hugo" ) );
        },3500);
    }
}

export const startGoogleLogin = () => {
    return( dispatch ) => {
        const auth = getAuth();
        signInWithPopup( auth, googleAuthProvider )
            .then( (user) => {
                console.log(user);
            } )
        }
}



export const login = (uid, displayName) => ({
    
        type: types.login,
        payload: {
            uid,
            displayName
        }
    
})
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import 'firebase/auth'

import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const startLoginEmailPassword = ( email, password, name ) => {
    return (dispatch) => {

        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword( email, password )
        .then( ({user}) => {

            // user.updateProfile({ displayName: name });

            
            dispatch(login( user.uid, user.displayName ));

            dispatch( finishLoading() );                      
            
        })
        .catch(e => {
            console.log(e.message);
            dispatch( finishLoading() ); 
        })
    }
}

export const startRegister = ( email, password, name ) => {
    return (dispatch) => {
        
        firebase.auth().createUserWithEmailAndPassword( email, password )
        .then( async({user}) => {

            await user.updateProfile({ displayName: name });

            
            dispatch(
                login( user.uid, user.displayName )                    
            )
        })
        .catch(e => {
            console.log(e.message)
        })
    }
}

export const startGoogleLogin = () => {
    return( dispatch ) => {
        
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( ({user}) => {
                dispatch(
                    login( user.uid, user.displayName )                    
                )
            });
    }
}



export const login = (uid, displayName) => ({
    
        type: types.login,
        payload: {
            uid,
            displayName
        }
    
})
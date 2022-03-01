import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch, 
} from "react-router-dom";
import { firebase } from '../firebase/firebase-config';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';

import { login } from '../actions/auth';



export const AppRouter = () => {

    const dispatch =  useDispatch();

    const [ checking, setChecking ] = useState(true);

    const [ loggedIn, setLoggedIn ] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {

            if( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setLoggedIn(true);
            }else{
                setLoggedIn(false);
            }

            setChecking(false);

        });
    },[ setChecking, setLoggedIn ]);

    if( checking ){
        return (
            <h1>Loading...</h1>
        )
    }

  return (    
    <Router>
        <div>
            <Switch>
                <Route 
                    path="/auth" 
                    component={AuthRouter} 
                />            
                <PrivateRoute
                    exact 
                    path="/" 
                    component={JournalScreen} 
                />
                <Redirect to="/auth/login" />
            </Switch>
        </div>
    </Router>
  
  )
}

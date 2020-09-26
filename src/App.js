import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {auth, firestore, firebase} from './firebase.js';
import CovidForm from './components/CovidForm';
import UserForm from './components_test/UserForm';

//If this is giving you an error, do yarn install <OR> yarn add @material-ui/icons
import ExitToApp from '@material-ui/icons/ExitToApp';

// React-Firebase hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <section>
        {user ? <UserForm /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <Button id="signInButton" onClick={signInWithGoogle}> <ExitToApp /> Sign in with Google</Button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button class={`sign-out ${auth.currentUser ? 'show' : 'hide'}`} onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default App;

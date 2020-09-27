import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Grid from "@material-ui/core/Grid";
// import { makeStyles } from '@material-ui/core/styles';
import {auth, firestore, firebase} from './firebase.js';
import UserForm from './components/UserForm.js';
import Details from './components/Details.js';

//If this is giving you an error, do yarn install <OR> yarn add @material-ui/icons
import ExitToApp from '@material-ui/icons/ExitToApp';
import TimeToLeaveRounded from '@material-ui/icons/TimeToLeaveRounded';

// React-Firebase hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

function App() {

  const [user] = useAuthState(auth);
  const [hasQuery, setHasQuery] = useState(false);
  const [queryString, setQueryString] = useState('');

  let result;

  // Query the database
  const search = (e) => {
    e.preventDefault();

    const query = firestore.collection("testUsers2").where("cert_uuid", "==", queryString);

    query
      .get()
      .then((querySnapshot) => {
        // Take the first result from the query (there should only be one)
        querySnapshot.forEach((doc) => {
          result = doc.data();
          console.log(result);
          setHasQuery(!hasQuery);
        });
      }).catch((error) => {
        console.log("Error getting documents: ", error);
      });

    setQueryString('');
  }

  return (
    <div className="App">
      <header className="App-header">
      <form noValidate onSubmit={search} className="align-query-tool container">
        <TextField 
          placeholder="Enter a certificate id"
          fullWidth
          value={queryString}
          onChange={(e) => setQueryString(e.target.value)}
        />
      </form>
        {/* Test Logo */}
        <img src={require('./covid_wallet_logo.png')} alt="logo" id="main_logo"/>
        {user ? <SignOut /> : <SignIn />}
      </header>
      <section>
        {hasQuery && <Details values={result} />}
      </section>
      <section>
        {user && <UserForm />}
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
    <Button id="signOutButton" onClick={() => auth.signOut()}> <TimeToLeaveRounded /> Sign Out</Button>
  )
}

export default App;

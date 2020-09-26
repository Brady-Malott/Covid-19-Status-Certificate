import React from 'react';
import './App.css';

// Firebase SDK
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// React-Firebase hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCLY6epj2T1jCDk_c9iO4JySrjvg8ctg6o",
  authDomain: "covid-dashboard-e6fac.firebaseapp.com",
  databaseURL: "https://covid-dashboard-e6fac.firebaseio.com",
  projectId: "covid-dashboard-e6fac",
  storageBucket: "covid-dashboard-e6fac.appspot.com",
  messagingSenderId: "265499291442",
  appId: "1:265499291442:web:495e39e7df2bc5f826712b",
  measurementId: "G-37K20WH1G4"
})

// Reference SDK with global vars
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <main className="container App-main">
        <p>Welcome to the site</p>
      </main>
    </div>
  );
}

export default App;

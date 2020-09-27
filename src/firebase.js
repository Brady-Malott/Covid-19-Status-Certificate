// import React, { useRef, useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// Firebase SDK
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
  
export {auth, firestore, firebase};

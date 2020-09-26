import React, { useRef, useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCwrOZns2JfapwvKtYZKMcH0CXUFauGq20",
  authDomain: "superchat-c3503.firebaseapp.com",
  databaseURL: "https://superchat-c3503.firebaseio.com",
  projectId: "superchat-c3503",
  storageBucket: "superchat-c3503.appspot.com",
  messagingSenderId: "342278760079",
  appId: "1:342278760079:web:10598c4a85faf313d672fa",
  measurementId: "G-RGY57XPD7D"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

export {auth, firestore, analytics};

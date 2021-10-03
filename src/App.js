import './App.css';

import Main from "./Main"
import TopNavBar from './TopNavBar';

import Scrape from './Scrape'
import Convert from './Convert';
import Manage from './Manage';
import Account from './Account';
import About from './About';

import {Switch, BrowserRouter, Route} from "react-router-dom"

import {useState} from "react"

//Firebase Imports
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider, signInWithRedirect } from '@firebase/auth';
import { getFirestore, collection, orderBy, query, limit} from '@firebase/firestore';


// Import the functions you need from the SDKs you need

import {useAuthState} from "react-firebase-hooks/auth"

import {initializeApp} from "firebase/app";


const firebaseConfig = {

  apiKey: "AIzaSyBikax8mtlfmStbkxxTAZedDpGNVw-2mOI",

  authDomain: "scrapper-1ffa6.firebaseapp.com",

  projectId: "scrapper-1ffa6",

  storageBucket: "scrapper-1ffa6.appspot.com",

  messagingSenderId: "823342439980",

  appId: "1:823342439980:web:9856638dd98afc568abb89",

  measurementId: "G-DJCM7BYZMG"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const firestore = getFirestore(app);

let LogIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider)
}


function App() {

  const [user] = useAuthState(auth)

  const userHistoryRef = collection(firestore, "history");
  const dataQuery = query(userHistoryRef, orderBy("createdAt"), limit(10));

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <TopNavBar/>
          <Main/>
        </Route>

        <Route path="/scrape">
          <Scrape></Scrape>
        </Route>

        <Route path="/convert">
          <Convert></Convert>
        </Route>

        <Route path="/manage">
          <Manage isLoggedIn = {user}></Manage>
        </Route>

        <Route path="/account">
          <Account query = {dataQuery} auth = {auth} logIn = {LogIn} isLoggedIn = {user}></Account>
        </Route>

        <Route path = "/about">
          <About></About>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;

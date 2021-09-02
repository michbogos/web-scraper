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

function App() {
  const [IsLoggedIn, SetIsLoggedIn] = useState(false);

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
          <Manage IsLoggedIn = {IsLoggedIn} SetIsLoggedIn = {SetIsLoggedIn}></Manage>
        </Route>

        <Route path="/account">
          <Account></Account>
        </Route>

        <Route path = "/about">
          <About></About>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;

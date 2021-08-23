import './App.css';

import Main from "./Main"
import TopNavBar from './TopNavBar';
import Scrape from './Scrape'

import {Switch, BrowserRouter, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <TopNavBar/>
      <Main/>
    </div>
    </BrowserRouter>
  );
}

export default App;

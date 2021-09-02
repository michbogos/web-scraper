import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import SingleScrape from "./SingleScrape"

export default function Scrape() {
  let { path, url } = useRouteMatch();
  return(
  <div>
  <div id = "TopNavBar">
  <button className="TopNavBarButton"><Link className = "link" to={url + "/single"}>Scrape Single Website</Link></button>
  <button className="TopNavBarButton"><Link className = "link" to={url + "/editor"}>Script Editor</Link></button>
  <button className="TopNavBarButton"><Link className = "link" to={url + "/nodes"}>Node Editor</Link></button>
  </div>
  <Switch>

    <Route path = {path + "/single"}>
      <SingleScrape></SingleScrape>
    </Route>

    <Route path = {path + "/editor"}>
    <div className = "MainFlex">
        <h3>Hey</h3>
      </div>
    </Route>

    <Route path = {path + "/nodes"}>
      <div className = "MainFlex">
        <h3>heyyyyy</h3>
      </div>
    </Route>
    
  </Switch>
  </div>
  )
}
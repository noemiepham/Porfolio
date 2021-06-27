import './Cinema.css';
import Header from './Componentscinema/Header.js'
import Home from './Componentscinema/Home.js' 
import  Populerfilm  from './Componentscinema/Populer-home';
import  Upcomingfilms  from './Componentscinema/Upcoming-home';
import  Toprate  from './Componentscinema/Toprated-home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Cinema = () => {
  return (
    <Router>
    <div>
     <Header />
     <Switch>
        <Route path = '/popular'>
          <Populerfilm/>
        </Route>
        <Route path = '/upcoming'>
          <Upcomingfilms/>
        </Route>
        <Route path = '/toprated'>
          <Toprate/>
        </Route>
        <Route path = '/'>
          <Home />
        </Route> 
     </Switch>
    </div>
    </Router>
  )
}
export default Cinema;

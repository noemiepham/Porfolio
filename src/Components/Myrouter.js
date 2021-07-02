import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Cinema from "./Projet/cinema/Webfilmnoemie";
import Foodblog from "./Projet/Foodblog/Foodblog.js";
const Myrouter =()=> {
    return (
        <Router>
            
            <Switch>
                <Route path="/cinema">
            <Cinema />
                </Route>
                <Route path="/foodblog">
            <Foodblog />
                </Route>
                <Route path="/game">
        
                </Route>
          
            </Switch>
        </Router>

    )
}
export default Myrouter
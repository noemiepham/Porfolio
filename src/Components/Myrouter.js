import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Cinema from "./Projet/cinema/Webfilmnoemie";
import Foodblog from "./Projet/Foodblog.js/Foodblog";
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
          
            </Switch>
        </Router>

    )
}
export default Myrouter
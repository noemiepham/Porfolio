import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Cinema from "./Projet/cinema/Webfilmnoemie";
const Myrouter =()=> {
    return (
        <Router>
            
            <Switch>
                <Route path="/cinema">
            <Cinema />
          
                </Route>
            </Switch>
        </Router>

    )
}
export default Myrouter
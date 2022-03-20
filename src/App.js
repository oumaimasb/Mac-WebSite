import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Mac from "./Pages/Mac";
import NavBar from "./Components/NavBar";
import { Ipad } from "./Pages/Ipad";
import AboutMac from "./util/AboutMac";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/Mac">
              <Mac />
            </Route>
            <Route path="/AboutMac">
              <AboutMac />
            </Route>
            <Route path="/iPad">
              <Ipad />
            </Route>
            <Redirect to="/Mac" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

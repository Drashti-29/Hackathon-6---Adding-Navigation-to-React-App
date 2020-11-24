import React, {Component, useState} from "react";
import {useLocation, BrowserRouter, Switch, Router, Link} from "react-route-com";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}

               <BrowserRouter>
               <LocationDisplay>
                   <Link to="/">Home</Link>
                   <Link to="/about">About</Link>
                   <Switch>
                       <Router exact path="/about">
                           <div>You ate on the about page</div>
                           </Router>
                           <Router exact path="/">
                               <Home />
                               </Router>
                               <Router path="*"><div>No match</div></Router>
                               </Switch>
                               </BrowserRouter>
            </div>
        )
    }
}


export default App;

import React, { useState, useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import store from "./store/index";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";

//page
import {LandingPage} from "./screen/LandingPage"

function App() {
  return (
    <Router>
      <Provider store ={store}>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Provider>
    </Router>

  );
}

export default App;

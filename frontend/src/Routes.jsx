// Modules
import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

// Components
import Header from "./components/header/Header";

// Pages Components
import GetList from "./components/pages/GetList/GetList";
import GetAcronym from "./components/pages/GetAcronym/GetAcronym";
import DeleteAcronym from "./components/pages/DeleteAcronym/DeleteAcronym";
import GetRandom from "./components/pages/GetRandom/GetRandom";
import PostAcronym from "./components/pages/PostAcronym/PostAcronym";
import PutAcronym from "./components/pages/PutAcronym/PutAcronym";

// Styles
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header className="header" />
        <Switch>
          <Route path="/" exact>
            <h1>Inicio</h1>
          </Route>
          <Route path="/getList" exact>
            <div className="container">
              <GetList />
            </div>
          </Route>
          <Route path="/getAcronym" exact>
            <div className="container">
              <GetAcronym />
            </div>
          </Route>
          <Route path="/getRandomAcronyms" exact>
            <div className="container">
              <GetRandom />
            </div>
          </Route>
          <Route path="/postAcronym" exact>
            <div className="container">
              <PostAcronym />
            </div>
          </Route>
          <Route path="/putAcronym" exact>
            <div className="container">
              <PutAcronym />
            </div>
          </Route>
          <Route path="/deleteAcronym" exact>
            <div className="container">
              <DeleteAcronym />
            </div>
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

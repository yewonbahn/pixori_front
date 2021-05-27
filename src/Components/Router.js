import React from "react";
import {BrowserRouter as Router,Redirect,Route,Switch} from "react-router-dom";
import Home from "../Routes/Home";
import Collection from "../Routes/Collection"
import Maker from "../Routes/Maker";
import Menubar from "./Menubar";
import Header from "./Header";
export default ()=>(
    <Router>
       <>
      <Header/>
      <Menubar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/maker" component={Maker} />
        <Route path="/collection" component={Collection} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
    </Router>
)
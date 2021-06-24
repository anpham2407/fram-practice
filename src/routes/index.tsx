import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../views/practice-1";
import Practice2 from "../views/practice-2";

const IndexRouter = () => {
  return (
    <Router>
      <ul className="navbar">
        <li>
          <Link to="/">Practice 1</Link>
        </li>
        <li>
          <Link to="/practice-2">Practice 2</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/practice-2">
          <Practice2 />
        </Route>
      </Switch>
    </Router>
  );
};

export default IndexRouter;

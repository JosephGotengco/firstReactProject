import React from "react";
import NavBar from "./components/navbar/navbar";

import Trading from "./Trading";
import Account from "./Account";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <NavBar title="STOCK NAME" />
      <Switch>
        <Route path="/trading" component={Trading} />
        <Route path="/account" component={Account} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;

// Include the React library
import React from "react";
// Include the react-router module
var router = require("react-router");
// Include the Route component
var Route = router.Route;
//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;
// Include the Router component
var Router = router.Router;
// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
var browserHistory = router.browserHistory;
// Reference the high-level components

import Login from "../components/Login.js";
import EditProfile from "../components/Edit.js";
import Main from "../components/Main";
import MainHome from "../components/MainHome";
import MainLogin from "../components/MainLogin";
import Registration from "../components/Registration.js";
import Nearby from "../components/Nearby.js";
import Edit from "../components/Edit.js";
import Match from "../components/Match.js";


// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      <Route path="/" component={MainLogin}>
        {/* Routes show the appropriate component */}
        <Route path="Login" component={Login} />
        <Route path="Registration" component={Registration} />

        <IndexRoute component={Login} />

      </Route>

      <Route path="" component={MainHome}>

        <Route path="Edit" component={Edit} />
        <Route path="Nearby" component={Nearby} />
        <Route path="Match" component={Match} />

        <IndexRoute component={Nearby} />

      </Route>

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={MainLogin} />

    </Route>
  </Router>
);

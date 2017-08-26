// Include the React library
import React from "react";

// Include the react-router module
import Router from "react-router";

// Include the Route component
import Route from router.Route;

//  Include the IndexRoute (catch-all route)
import IndexRoute from router.IndexRoute;

// Include the Router component
import Router from router.Router;

// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
var browserHistory = router.browserHistory;

// Reference the high-level components
// var Main = require("../components/Main");
import Login from "/Login.js";
import EditProfile from "../components/EditProfile.js";


// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={EditProfile}>
    
      {/* If user selects Search or Saved show the appropriate component */}
      {/* <Route path="Search" component={Search} /> */}
     

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={EditProfile} />

    </Route>
  </Router>
);

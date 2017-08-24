// Inclue the React library
var React = require("react");

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
// var Main = require("../components/Main");
// var Search = require("../components/Search");
var Login = require("../components/Login");


// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Login}>

      {/* If user selects Search or Saved show the appropriate component */}
      {/* <Route path="Search" component={Search} /> */}
     

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Login} />

    </Route>
  </Router>
);

import React from "react";
import ReactDOM from "react-dom"; 
import helpers from "../utils/helpers.js";

var Link = require("react-router").Link;


// Create the Main component
class Main extends React.Component{

  render() {

    return (
      // We can only render a single div. So we need to group everything inside of this main-container one
      <div className="main-container" style = {mainComponentStyle}>
          Navbar
          <nav className="navbar navbar-default" role="navigation" style = {headerStyle}>
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
               
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  {/* Using <Link> in place of <a> and "to" in place of "href" */}
                  <li><Link to="/Login">Login</Link></li>
                  <li><Link to="/Registration">Register</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Here we will deploy the sub components (Search or Saved */}
          {/* These sub-components are getting passed as this.props.children */}
          {/* {this.props.children} */}

          <footer>
            <hr />
            <p className="pull-right">
              <i className="fa fa-github" aria-hidden="true"></i>
              Paw in Paw &copy; 2017
            </p>
          </footer>
        
      </div>
    );
  }
};

// Export the module back to the route
export default Main;

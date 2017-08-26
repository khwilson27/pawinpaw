// Include React as a dependency
import React from "react";
import ReactDOM from "react-dom"; 
import helpers from "../utils/helpers.js";

var Link = require("react-router").Link;

// Create the Main component
class Nearby extends React.Component{

  // Our render method. Utilizing a few helper methods to keep this logic clean
  render() {
    return (
      <div className="mainContainer">
        {/* Navigation bar */}
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div className="navBar">navBar here</div>
          </div>
        </div>
        
        <div className="container">
        {/* Login fields */}
        <div class="row">
            <div className="col-sm-12 col-xs-12">
                <Image source={{uri: "http://via.placeholder.com/350x350"}}/>
            </div>
        </div>
        <div className="row">
          <div className="col-sm-8 col-xs-8">
            <form>
              <button type="submit" className="btn btn-default">Dislike</button>
              <br></br>
              <button type="submit" className="btn btn-default">Like</button>
            </form>
          </div>
        </div>
        {/* Footer */}
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <footer>
              <hr />
              <p className="pull-right">
                <i className="fa fa-github" aria-hidden="true"></i>
                Paw in Paw &copy; 2017
            </p>
            </footer>
          </div>
        </div>
        </div>
      </div>
    )
  }
};

// Export the module back to the route
export default Nearby;

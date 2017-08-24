// Include React as a dependency
var React = require("react");

// Include the Helper (for the saved recall)
// var helpers = require("../utils/helpers");

// Create the Main component
var Login = React.createClass({

  // Our render method. Utilizing a few helper methods to keep this logic clean
  render: function () {
    return (
    <div className="mainContainer">
      {/* Navigation bar */}
      <div className="row">
        <div className="navBar col-sm-12 col-xs-12">navBar here</div>
      </div>
      {/* Login fields */}
      <div className="row">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
          </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
              <button type="submit" className="btn btn-default">Login</button>
              <br></br>
              <p>Don't have an account?</p>
              <button type="submit" className="btn btn-default">Register</button>
        </form>
          </div>
    </div>
    )
  }
});

// Export the module back to the route
module.exports = Login;

// Include React as a dependency
var React = require("react");

// Include the Helper (for the saved recall)
// var helpers = require("../utils/helpers");

// Create the Main component
var Registration = React.createClass({

  // Our render method. Utilizing a few helper methods to keep this logic clean
  render: function () {
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
        <div className="row">
          <div className="col-sm-8 col-xs-8">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1"> Re-enter Password</label>
                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-default">Register</button>
              <br></br>
              <p>Already have an account?</p>
              <button type="submit" className="btn btn-default">Login</button>
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
});

// Export the module back to the route
module.exports = Registration;

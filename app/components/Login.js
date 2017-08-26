// Include React as a dependency
import React from "react";
import ReactDOM from "react-dom";
// Include the Helper (for the saved recall)
import helpers from "../utils/helpers.js";

// Create the Main component
 class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      email: " "
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
  }

    //Getting The Inputs Values & Use It To Update The State.
    handleChange(event) {
      let state = {};
      state[event.target.id] = $.trim(event.target.value);
      this.setState(state);
    }

    handleSignin(event) {
      event.preventDefault();
        //Sending The User's email and password using helpers file.
        helpers.userLogin(this.state.email.toLowerCase(), this.state.password).then((Response) => {
          //Getting the new user data through the Response & Use It To Update The State.
          console.log(Response);
          this.setState({
            id: Response.data.id,
            email: Response.data.email,
            message:Response.data.message
          });
        });
    }

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
        <div className="row">
          <div className="col-sm-8 col-xs-8">
            <form onSubmit={this.handleSignin}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" value={this.state.email} className="form-control" id="email" placeholder="Email"  onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password"  onChange={this.handleChange} />
                {/*error message*/}
                {this.state.message ? (<div className="alert alert-danger" role="alert">{this.state.message}</div>) : "Move to next"}
              </div>
              <button type="submit" onClick={this.handleSignin} className="btn btn-default">Login</button>
              <br></br>
              <p>Don't have an account?</p>
              <button type="submit"  className="btn btn-default">Register</button>
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
export default Login;

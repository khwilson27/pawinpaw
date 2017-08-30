// Include React as a dependency
import React from "react";

var router = require("react-router");
var browserHistory = router.browserHistory;

// Include the Helper (for the saved recall)
import helpers from "../utils/helpers.js";

import GoogleLogin from 'react-google-login';

var Link = require("react-router").Link;

// Create the Main component
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: " ",
      message: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
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
        message: Response.data.message
      });

      

  
    });
  }

  //Google Response Here!!!
  responseGoogle(response) {
    console.log(response.profileObj.email);
    console.log(response.profileObj.googleId);
    this.setState({
      email: response.profileObj.email,
      g_id: response.profileObj.googleId
    });
    //Sending The User's email and password using helpers file.
    helpers.regNewuser(response.profileObj.email, response.profileObj.googleId).then((Response) => {
      //Getting the new user data through the Response & Use It To Update The State.
      console.log(Response);
      if (!Response.data.message) {
        this.setState({
          id: Response.data.id,
          email: Response.data.email,
        });
        //redirect to "EditProfile"
      } else {
        //Sending The User's email and password using helpers file.
        helpers.userLogin(response.profileObj.email, response.profileObj.googleId).then((logResponse) => {
          //Getting the new user data through the Response & Use It To Update The State.
          console.log(logResponse);
          this.setState({
            id: logResponse.data.id,
            email: logResponse.data.email,
          });
          //redirect to Nearby
        });
      }
    });

  }

  // Our render method. Utilizing a few helper methods to keep this logic clean
  render() {
    return (
      <div className="mainContainer">
        {/* Navigation bar */}
        <div className="container">
          {/* Login fields */}
          <div className="row">
            <div className="col-sm-8 col-xs-8">
              <form onSubmit={this.handleSignin}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" value={this.state.email} className="form-control" id="email" placeholder="Email" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
                  {/*error message*/}
                  {this.state.message ? (<div className="alert alert-danger" role="alert">{this.state.message}</div>) : "no errors"}
                </div>
                <button type="submit" onClick={this.handleSignin} className="btn btn-default">Login</button>
                <br/>
                  {/*Google LogIn*/}
                  <GoogleLogin clientId="280548920560-u13cbso5e0b21ouc0aqokmf7rlfvt4po.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                  ></GoogleLogin>
                <br/>
                <p>Don't have an account?</p>
                <button type="submit" className="btn btn-default">Register</button>
                <br />

              </form>
            </div>

          </div>
        </div>
      </div>
    )
  }
};

// Export the module back to the route
export default Login;

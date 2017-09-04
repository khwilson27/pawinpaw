// Include React as a dependency
import React from "react";
import ReactDOM from "react-dom";
// Include the Helper (for the saved recall)
import helpers from "../utils/helpers.js";

import GoogleLogin from 'react-google-login';

var Link = require("react-router").Link;

var router = require("react-router");
var browserHistory = router.browserHistory;

var inputStyle = {
  borderColor: "#FFB74D",
  borderWidth: "2px",
  borderStyle: "solid"
}

var buttonStyle = {
  height: "60px",
  // position: "relative",
  // left: "300px" 

}

// Create the Main component
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: " ",
      password: " ",
      loggedin: false
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
    console.log(state)
  }
  handleSignin(event) {
    event.preventDefault();
    //Sending The User's email and password using helpers file.
    helpers.userLogin(this.state.email.toLowerCase(), this.state.password).then((Response) => {
      console.log("state")
      //Getting the new user data through the Response & Use It To Update The State.
      console.log(Response);
      if (Response.data.message) {
        this.setState({
          message: Response.data.message,
          loggedin: false
        });
      } else if (Response.data.id) {
        this.setState({
          id: Response.data.id,
          email: Response.data.email,
          loggedin: true
        });
        this.props.setParent(this.state)
        this.handleRedirect();
      }
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
      if (Response.data.id) {
        this.setState({
          id: Response.data.id,
          email: Response.data.email,
          registered: true
        });
        this.props.setParent(this.state)
        //redirect to "EditProfile"
        this.handleRedirect();
      } else {
        //Sending The User's email and password using helpers file.
        helpers.userLogin(response.profileObj.email, response.profileObj.googleId).then((logResponse) => {
          //Getting the new user data through the Response & Use It To Update The State.
          console.log(logResponse);
          this.setState({
            id: logResponse.data.id,
            email: logResponse.data.email,
            loggedin: true
          });
          this.props.setParent(this.state)
          //redirect to Nearby
          this.handleRedirect()
        });
      }
    });
  }
  handleRedirect() {
    if (this.state.registered) {
      browserHistory.replace("/Edit")
    } else if (this.state.loggedin) {
      browserHistory.replace("/Nearby")
    }
  }
  handelErrors() {
    if (this.state.message) { return (<div className="alert alert-danger" role="alert">{this.state.message}</div>) }
  }
  // Our render method. Utilizing a few helper methods to keep this logic clean
  render() {
    console.log(this.state.message)
    return (
      <div className="mainContainer">
        {/* Navigation bar */}
        <div className="container">
          {/* Login fields */}
          <div className="row">
            <div className="col-sm-8 col-xs-8 col-sm-offset-2 col-xs-offset-2">
              <form onSubmit={this.handleSignin}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" value={this.state.email} className="form-control" id="email" placeholder="Email" style={inputStyle} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" style={inputStyle} onChange={this.handleChange} />
                  {/*error message*/}
                  {this.handelErrors()}
                </div>
                {/* Regular Login Button */}
                <input type="image" onClick={this.handleSignin} style={buttonStyle} src="./img/Login.png"/>
                <br />

                {/*Google LogIn*/}
                <GoogleLogin clientId="280548920560-u13cbso5e0b21ouc0aqokmf7rlfvt4po.apps.googleusercontent.com"
                  buttonText="Continue With Google"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                ></GoogleLogin>
                <br /><br/>
                <p>Don't have an account?</p>

                {/* Register Button */}
                <input type="image" style={buttonStyle} src="./img/Register.png"/>
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

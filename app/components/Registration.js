// Include React as a dependency
import React from "react";

var router  = require("react-router") ;
var browserHistory = router.browserHistory;

// Include the Helper (for the saved recall)
import helpers from "../utils/helpers.js";
import GoogleLogin from 'react-google-login';


var Link = require("react-router").Link;



// Create the Main component
class Registration extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      email: " ",
      password: " ",
      registered: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  //Getting The Inputs Values & Use It To Update The State.
  handleChange(event) {
    let state = {};
    state[event.target.id] = $.trim(event.target.value);
    this.setState(state);

  }

  handleSignup(event) {
    event.preventDefault();
    console.log(this.state.repassword);
    if (this.state.password === this.state.repassword) {
      //Sending The User's email and password using helpers file.
      helpers.regNewuser(this.state.email.toLowerCase(), this.state.password).then((Response) => {
        //Getting the new user data through the Response & Use It To Update The State.
        console.log(Response);
        if(Response.data.message){
        this.setState({
          message: Response.data.message,
          registered: false
        });
      }else if(Response.data.id){
        this.setState({
          id: Response.data.id,
          email: Response.data.email,
          registered: true

        });
        this.handleRedirect();
      }
        
      });
    } else {
      console.log("The password not matches please try again");
      this.setState({error: "The password not matches please try again"})
    }
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
        this.handleRedirect();
        // browserHistory.push("/Login");
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
          this.handleRedirect();
          
        });
      }
    });

  }


  handleRedirect(){
    if (this.state.registered){
      browserHistory.replace("/Edit")
    }else if(this.state.loggedin){
      browserHistory.replace("/Nearby")
    }
    
  }

  handelErrors(){
    if(this.state.message) { return(<div className="alert alert-danger" role="alert">{this.state.message}</div>)}
    if(this.state.error){return(<div className="alert alert-danger" role="alert">{this.state.error}</div>)} 
  }

  // Our render method. Utilizing a few helper methods to keep this logic clean
  render() {
    console.log(this.state.id + " && " + this.state.email);

    return (
      <div className="mainContainer">
        <div className="container">
          {/* Login fields */}
          <div className="row">
            <div className="col-sm-8 col-xs-8">
                                {/*error message*/}
                                {this.handelErrors()}
              <form onSubmit={this.handleSignup}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" value={this.state.email} className="form-control" id="email" placeholder="Email" onChange={this.handleChange} />

                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" value={this.state.password} className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="Repassword"> Re-enter Password</label>
                  <input type="password" value={this.state.repassword} className="form-control" id="repassword" placeholder="Password" onChange={this.handleChange} />
                </div>
                <button onClick={this.handleSignup} className="btn btn-default">Register</button>
                <br></br>
                {/*Google LogIn*/}
                <GoogleLogin clientId="280548920560-u13cbso5e0b21ouc0aqokmf7rlfvt4po.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                ></GoogleLogin>
                <br />
                <br />
                <br />
                <p>Already have an account?</p>
                <a className="btn btn-default">Login</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

// Export the module back to the route
export default Registration;

// Include React as a dependency
import React from "react";
import ReactDOM from "react-dom";
// Include the Helper (for the saved recall)
import helpers from "../utils/helpers.js";
import GoogleLogin from 'react-google-login';

//Just for testing!!!!!!!!!!!!!!!
import Login from "./Login.js";



// Create the Main component
class Registration extends React.Component {

  constructor(props, context) {
    super(props, context);
  
    this.state = {
      email: " "
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
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
        this.setState({
          id: Response.data.id,
          email: Response.data.email,
          message:Response.data.message
        });
      });
    } else {
      console.log("The password not matches please try again");
    }
  }
 
  //Google Response Here!!!
  responseGoogle(response){
  console.log(response);
  }

  componentDidMount(){
    window.fbAsyncInit = function() {
            FB.init({
                appId: '915773281910101',
                cookie: true,
                xfbml: true,
                version: 'v2.7'
            });
            FB.AppEvents.logPageView();
            console.log("Here!!!!!!!!!!!!!!!!!")
    FB.getLoginStatus(function (response) {
      console.log(response);
      if (response.status === 'connected') {
        FB.api('/me', 'GET', {
          fields: 'first_name,last_name,name,id, email'
        }, function (data) {
          console.log(data);
          $(".here").append("<br/> <br/>" + JSON.stringify(data) + "<br/> <br/>");
        });
      } else {
        console.log("not loggedin");
      }

    });
        };


        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=915773281910101";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
  }


  //Facebook Here!!!

  faceBook() {


  }


  // Our render method. Utilizing a few helper methods to keep this logic clean
  render() {
    console.log(this.state.id + " && " + this.state.email);
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
              <form onSubmit={this.handleSignup}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" value={this.state.email} className="form-control" id="email" placeholder="Email" onChange={this.handleChange} />
                  {/*error message*/}
                  {this.state.message ? (<div className="alert alert-danger" role="alert">{this.state.message}</div>) : "Move to next"}
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
                <GoogleLogin  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                ></GoogleLogin>


    <br/>
    <div className="fb-login-button" data-max-rows="1" data-size="medium" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="true" onlogin={this.faceBook()}></div>
    <div id="fb-root"></div>
    <br/>
                <br />
                <p>Already have an account?</p>
                <a className="btn btn-default">Login</a>
              </form>
            </div>
            <p>____________________________________Login__________________________________________________</p>
            <Login />
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
export default Registration;

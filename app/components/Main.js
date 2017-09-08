import React from "react";
import helpers from "../utils/helpers.js";

var Link = require("react-router").Link;
var router = require("react-router");
var browserHistory = router.browserHistory;

var navStyle = {
  backgroundColor: "#009191",
}

var logoStyle = {
  height: "55px",
  position: "absolute",
  top: "5%",
  left: "45%"
}

var footerStyle = {
  textAlign: "center"
}

// Create the Main component
class Main extends React.Component {


  constructor(props, context) {
    super(props, context);

    this.state = {
      email: "",
      id: "",
      isAuth: false,

      name: "",
      photo_url: "",
      photo_publicid: "",
      age: "",
      zipcode: "",
      breed: "",
      likes: "",
      dislikes: "",
      favTreat: ""

    };

    this.setParent = this.setParent.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  setParent(props) {
    console.log("New Main State:");
    console.log(props);

    this.setState({
      id: props.id,
      email: props.email,
      isAuth: props.isAuth,

      name: props.name,
      photo_url: props.photo_url,
      photo_publicid: props.photo_publicid,
      age: props.age,
      zipcode: props.zipcode,
      breed: props.breed,
      likes: props.likes,
      dislikes: props.dislikes,
      favTreat: props.favTreat
    });
  }

  handleLogout() {
    this.setState({
      id: "",
      email: "",
      isAuth: false,

      name: "",
      photo_url: "",
      photo_publicid: "",
      age: "",
      zipcode: "",
      breed: "",
      likes: "",
      dislikes: "",
      favTreat: ""
    })
    browserHistory.replace("/Login")
  }

  renderNavLogin() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Registration">Register</Link></li>
      </ul>
    )
  }

  renderNavHome() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/Edit">Profile</Link></li>
        <li><Link to="/Match">Matches</Link></li>
        <li><Link to="/Nearby">Nearby</Link></li>
        <li><p onClick={this.handleLogout}>Logout</p></li>
      </ul>
    )
  }
  render() {

    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        setParent: this.setParent,
        id: this.state.id,
        email: this.state.email,
        isAuth: this.state.isAuth,

        name: this.state.name,
        photo_url: this.state.photo_url,
        photo_publicid: this.state.photo_publicid,
        age: this.state.age,
        zipcode: this.state.zipcode,
        breed: this.state.breed,
        likes: this.state.likes,
        dislikes: this.state.dislikes,
        favTreat: this.state.favTreat
      })
    );

    console.log(this.state.email + "  " + this.state.id)
    return (
      // We can only render a single div. So we need to group everything inside of this main-container one
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation" style={navStyle}>
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
            {/* Logo Image */}
            <img style={logoStyle} src="./img/pawinpaw-logo.png" />
            <div className="collapse navbar-collapse navbar-ex1-collapse">

              {/* Using <Link> in place of <a> and "to" in place of "href" */}
              {this.state.isAuth ? this.renderNavHome() : this.renderNavLogin()}

            </div>
          </div>
        </nav>
        {/* Here we will deploy the sub components */}
        {/* These sub-components are getting passed as this.props.children */}
        {/* {this.props.children} */}
        {childrenWithProps}
        <div className="container">
          <footer>
            <hr />
            <p style={footerStyle}>
              <i className="fa fa-github" aria-hidden="true"></i>
               Paw in Paw &copy; 2017
            </p>
          </footer>
        </div>

      </div>
    );
  }
};

// Export the module back to the route
export default Main;

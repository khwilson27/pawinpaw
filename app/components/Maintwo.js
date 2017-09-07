import React from "react";
import ReactDOM from "react-dom";
import helpers from "../utils/helpers.js";

var Link = require("react-router").Link;

var navStyle = {
  backgroundColor: "#009191"
}

var logoStyle = {
  height: "60px",
  position: "absolute", 
}

// Create the Main component
class Maintwo extends React.Component {


  constructor(props, context) {
    super(props, context);

    this.state = {
      email: " ",
      id: " "
    };

    this.setParent = this.setParent.bind(this);
  }

  setParent(props) {

    console.log(props.email + " " + props.id)
    this.setState({
      id: props.id,
      email: props.email
    });
  }
  render() {

    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        setParent: this.setParent,
        id: this.state.id,
        email: this.state.email
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
            <img style={logoStyle} src= "./img/pawinpaw-logo.png"/>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav navbar-right">
                {/* Using <Link> in place of <a> and "to" in place of "href" */}
                <li><Link to="/Edit">Profile</Link></li>
                <li><Link to="/Registration">Matches</Link></li>
                <li><Link to="/Nearby">Nearby</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Here we will deploy the sub components (Search or Saved */}
        {/* These sub-components are getting passed as this.props.children */}
        {/* {this.props.children} */}
        {childrenWithProps}

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
export default Maintwo;

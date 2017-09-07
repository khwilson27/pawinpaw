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
class Main extends React.Component {


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
      <div>
 
        {/* Here we will deploy the sub components */}
        {/* These sub-components are getting passed as this.props.children */}
        {/* {this.props.children} */}
        {childrenWithProps}

      </div>
    );
  }
};

// Export the module back to the route
export default Main;

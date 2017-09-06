// Include React as a dependency
import React from "react";
import ReactDOM from "react-dom";
import helpers from "../utils/helpers.js";

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
class Edit extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: " ",
      age: " ",
      breed: " ",
      likes: " ",
      dislikes: " ",
      favTreat: " ",
      zipcode: " ",
      editClicked: true,
      saveClicked: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.displayForm  = this.displayForm.bind(this);
  }

  handleChange(event) {
    let state = {};
    state[event.target.id] = $.trim(event.target.value);
    this.setState(state);
    console.log(state);
  }

  handleUpdate(event) {
    event.preventDefault();
    const data = {
      // id: this.props.id,
      id: 1,
      name: this.state.name,
      age: this.state.age,
      breed: this.state.breed,
      likes: this.state.likes,
      dislikes: this.state.dislikes,
      favTreat: this.state.favTreat,
      zipcode: this.state.zipcode
    }
    console.log(data);
    helpers.userData(data).then(() => {
      this.setState({
        saveClicked: true,
        editClicked: false
      });
    });
  }

  renderForm() {
    return (
      <form onSubmit={this.handleUpdate}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="email" value={this.state.name} style={inputStyle} className="form-control" id="name" placeholder="Enter Name" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="text" value={this.state.age} style={inputStyle} className="form-control" id="age" placeholder="Age" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="breed"> Breed</label>
          <input type="text" value={this.state.breed} style={inputStyle} className="form-control" id="breed" placeholder="Breed" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="likes"> Likes</label>
          <input type="text" value={this.state.likes} style={inputStyle} className="form-control" id="likes" placeholder="Likes" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="dislikes"> Dislikes</label>
          <input type="text" value={this.state.dislikes} style={inputStyle} className="form-control" id="dislikes" placeholder="Dislikes" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="favTreat"> Favorite Treats</label>
          <input type="text" value={this.state.favTreat} style={inputStyle} className="form-control" id="favTreat" placeholder="Favorite Treats" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="zipcode"> Zip Code</label>
          <input type="text" value={this.state.zipcode} style={inputStyle} className="form-control" id="zipcode" placeholder="Zip Code" onChange={this.handleChange} />
        </div>

      </form>
    )
  }

  renderData() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="name" style={inputStyle}>Name: </label>
          {this.state.name}
        </div>
        <div className="form-group">
          <label htmlFor="age" style={inputStyle}>Age: </label>
          {this.state.age}
        </div>
        <div className="form-group">
          <label htmlFor="breed" style={inputStyle}> Breed: </label>
          {this.state.breed}
        </div>
        <div className="form-group">
          <label htmlFor="likes" style={inputStyle}> Likes: </label>
          {this.state.likes}
        </div>
        <div className="form-group">
          <label htmlFor="dislikes" style={inputStyle}> Dislikes: </label>
          {this.state.dislikes}
        </div>
        <div className="form-group">
          <label htmlFor="favTreat" style={inputStyle}> Favorite Treats: </label>
          {this.state.favTreat}
        </div>
        <div className="form-group">
          <label htmlFor="zipcode" style={inputStyle}> Zip Code: </label>
          {this.state.zipcode}
        </div>

      </form>
    )
  }

  handleClick() {
    this.setState({
      editClicked: true,
      saveClicked: false
    })
  }

  handleRedirect() {
    browserHistory.replace("/Nearby")
  }
  // Our render method. Utilizing a few helper methods to keep this logic clean
  render() {
    console.log(this.props.id + "  " + this.props.email);
    return (

      <div className="mainContainer">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div className="navBar">navBar here</div>
          </div>
        </div>
        <div className="container">
          {/* Login fields */}
          <div className="row">
            <div className="col-sm-8 col-xs-8">
              {this.state.saveClicked ? this.renderData() : this.state.editClicked ? this.renderForm() : "Some Thing Wrong"}
            </div>
          </div>
          <div>

            <input type="image" onClick={this.handleClick} style={buttonStyle} src="./img/Edit.png" />
            <br />
            <input type="image" onClick={this.handleUpdate} style={buttonStyle} src="./img/Save.png" />
            <br />
            <button type="submit" onClick={this.handleRedirect} className="btn btn-default">Done</button>
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
export default Edit;

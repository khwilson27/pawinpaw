// Include React as a dependency
import React from "react";
import ReactDOM from "react-dom"; 
import helpers from "../utils/helpers.js";

var Link = require("react-router").Link;
var router = require("react-router");
var browserHistory = router.browserHistory;
// Create the Main component
class Edit extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      name:" ",
      age: " ",
      breed:" ",
      likes:" ",
      dislikes:" ",
      favTreat: " ",
      zipcode: " ",
      editClicked:true,
      saveClicked:false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleClick  = this.handleClick.bind(this);
    // this.displayForm  = this.displayForm.bind(this);
  }

  handleChange(event) {
    let state = {};
    state[event.target.id] = $.trim(event.target.value);
    this.setState(state);
    console.log(state);
  }

  handleUpdate(event){
    event.preventDefault();
    const data ={
      id:this.props.id,
      name:this.state.name,
      age: this.state.age,
      breed:this.state.breed,
      likes:this.state.likes,
      dislikes:this.state.dislikes,
      favTreat: this.state.favTreat,
      zipcode: this.state.zipcode
    }
    console.log(data);
    helpers.userData(data).then(()=>{
      this.setState({
        saveClicked: true,
        editClicked:false
      });
    });
  }

  renderForm(){
    return(
    <form onSubmit={this.handleUpdate}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="email" value={this.state.name} className="form-control" id="name" placeholder="Enter Name" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input type="text" value={this.state.age} className="form-control" id="age" placeholder="Age" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="breed"> Breed</label>
                <input type="text" value={this.state.breed} className="form-control" id="breed" placeholder="Breed" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="likes"> Likes</label>
                <input type="text" value={this.state.likes} className="form-control" id="likes" placeholder="Likes" onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="dislikes"> Dislikes</label>
                <input type="text" value={this.state.dislikes} className="form-control" id="dislikes" placeholder="Dislikes" onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="favTreat"> Favorite Treats</label>
                <input type="text" value={this.state.favTreat} className="form-control" id="favTreat" placeholder="Favorite Treats" onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="zipcode"> Zip Code</label>
                <input type="text" value={this.state.zipcode} className="form-control" id="zipcode" placeholder="Zip Code" onChange={this.handleChange}/>
              </div>

            </form>
            )
  }

  renderData(){
    return(
      <form>
              <div className="form-group">
                <label htmlFor="name">Name: </label>
                {this.state.name}
              </div>
              <div className="form-group">
                <label htmlFor="age">Age: </label>
                {this.state.age} 
              </div>
              <div className="form-group">
                <label htmlFor="breed"> Breed: </label>
                {this.state.breed}
              </div>
              <div className="form-group">
                <label htmlFor="likes"> Likes: </label>
                {this.state.likes}
              </div>
              <div className="form-group">
                <label htmlFor="dislikes"> Dislikes: </label>
                {this.state.dislikes}
              </div>
              <div className="form-group">
                <label htmlFor="favTreat"> Favorite Treats: </label>
                {this.state.favTreat} 
              </div>
              <div className="form-group">
                <label htmlFor="zipcode"> Zip Code: </label>
                {this.state.zipcode} 
              </div>

            </form>
    )
  }

  handleClick(){
    this.setState({editClicked:true,
      saveClicked: false
    })
  }

  handleRedirect(){
  browserHistory.replace("/Nearby")
}
  // Our render method. Utilizing a few helper methods to keep this logic clean
  render () {
    console.log(this.props.id+"  "+this.props.email);
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
          {this.state.saveClicked ? this.renderData() : this.state.editClicked ? this.renderForm() : "Some Thing Wrong" }
          </div>
        </div>
        <div>
        <button type="submit" onClick={this.handleClick} className="btn btn-default">Edit</button>
              <br />
              <button type="submit" onClick={this.handleUpdate} className="btn btn-default">Save</button>
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

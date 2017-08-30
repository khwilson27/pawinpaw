// Include React as a dependency
import React from "react";

import helpers from "../utils/helpers.js";

import Dropzone from 'react-dropzone'

var Link = require("react-router").Link;

// Create the Main component
class Edit extends React.Component {
  constructor() {
    super()
    this.state = { 
      files: [],
      accepted: [],
      rejected: []
     }
  }

  onDrop(files) {
    this.setState({
      files
    });

    console.log(this.state.files);
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
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Name</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Age</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Age" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1"> Breed</label>
                  <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Breed" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1"> Likes</label>
                  <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Likes" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1"> Dislikes</label>
                  <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Dislikes" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1"> Favorite Treats</label>
                  <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Favorite Treats" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1"> Zip Code</label>
                  <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Zip Code" />
                </div>

                <div className="dropzone">
                  <Dropzone
                    accept="image/jpeg, image/png"
                    onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
                  >
                    <p>Try dropping some files here, or click to select files to upload.</p>
                    <p>Only *.jpeg and *.png images will be accepted</p>
                  </Dropzone>
                </div>

                <aside>
                  <h2>Dropped files</h2>
                  <ul>
                    {
                      this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                    }
                  </ul>
                </aside>


                <button type="submit" className="btn btn-default">Edit</button>
                <br></br>
                <button type="submit" className="btn btn-default">Save</button>
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
export default Edit;

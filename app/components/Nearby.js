// Include React as a dependency
import React from "react";
import ReactDOM from "react-dom"; 
import helpers from "../utils/helpers.js";

import {PhotoSwipe} from 'react-photoswipe';


var Link = require("react-router").Link;

// PhotoSwipe = window.ReactPhotoswipe.PhotoSwipe;
var PhotoSwipeGallery = window.ReactPhotoswipe.PhotoSwipeGallery;

// Create the Main component
class Nearby extends React.Component{
  constructor(props,context){
    super(props, context);
    this.isOpen = true;
 
this.items = [
  {
    src: 'http://lorempixel.com/1200/900/sports/1',
    w: 500,
    h: 500,
    title: 'Image 1'
  },
  {
    src: 'http://lorempixel.com/1200/900/sports/2',
    w: 500,
    h: 500,
    title: 'Image 2'
  }
];
 
this.options = {
  //http://photoswipe.com/documentation/options.html 
};

    this.openPhotoSwipe = this.openPhotoSwipe.bind(this);


    }
 
  openPhotoSwipe(){
   
    this.setState({
      isOpen: true,
      options: {
        closeOnScroll: false
      }
    });

  }
  
  handleClose() {
  isOpen: false
};

getThumbnailConten(item){
    return (
      <img src={item.thumbnail} with={120} height={90}/>
    );
  };

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
            <div className="col-sm-12 col-xs-12">
                {/* <Image source={{uri: "http://via.placeholder.com/350x350"}}/> */}

            </div>
        </div>
        <div className="row">
          <div className="col-sm-8 col-xs-8">
          <PhotoSwipe isOpen={this.isOpen} items={this.items} options={this.options} onClose={this.handleClose} />
            <button className='btn btn-primary' onClick={this.openPhotoSwipe}>
            <PhotoSwipeGallery items={this.state.galleryItems}
              thumbnailContent={this.getThumbnailContent}/>
              Click me
            </button>
            <form>
              <button type="submit" className="btn btn-default">Dislike</button>
              <br></br>
              <button type="submit" className="btn btn-default">Like</button>
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
export default Nearby;

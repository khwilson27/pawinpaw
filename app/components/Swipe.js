import React from "react";
import ReactDOM from "react-dom";
import {PhotoSwipe} from 'react-photoswipe';




class Swipe extends React.Component {
  constructor(props, context){
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
 
let options = {
  //http://photoswipe.com/documentation/options.html 
};
  }
  handleClose() {
  isOpen: false
};

  render() {
    return ( 
<PhotoSwipe isOpen={this.isOpen} items={this.items} options={this.options} onClose={this.handleClose} />

    );
  }
}


// function run() {
//   ReactDOM.render( < App/ > , document.getElementById('app'));
// }

// if (window.addEventListener) {
//   window.addEventListener('DOMContentLoaded', run);
// } else {
//   window.attachEvent('onload', run);
// }

export default Swipe;
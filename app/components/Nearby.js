// Include React as a dependency
import React from "react";
import ReactDOM from "react-dom";
import helpers from "../utils/helpers.js";
import { PhotoSwipe } from 'react-photoswipe';
import { PhotoSwipeGallery } from 'react-photoswipe';
var Link = require("react-router").Link;

var buttonStyle = {
  height: "100px",
  // whitespace: "pre",
  marginBottom: "20px"
}

var textStyle = {
  fontFamily: "Roboto Condensed",
  textAlign: "center",
  paddingRight: "5px"
}

var infoStyle = {
  fontFamily: "Roboto Condensed",
  fontWeight: "italic"
}

var displayStyle = {
  display: "inline",
}

var floatRight={
  float: "right"
}

var floatLeft={
  float: "left"
}

var clearFloats= {
  clear: "both"
}

var paddingStyle= {
  paddingBottom: "10px",
  marginTop: "0px"

}

var backButton= {
  display: "block",
  margin: "auto",
  backgroundColor: "#009191", 
  border: "none", 
  height: "40px",
  width: "180px",
  color: "white",
  borderRadius: "5px",
  fontFamily: "Roboto Condensed",
  letterSpacing: "1px",
  marginBottom: "5px"
}

var uploadStyle = {
  display: "block", 
  margin: "auto",
}


var count = 1;

import PropTypes from 'prop-types';
class Nearby extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.openPhotoSwipe = this.openPhotoSwipe.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handelMoving = this.handelMoving.bind(this);
    this.handelLikeclick = this.handelLikeclick.bind(this);
    this.handelPassclick = this.handelPassclick.bind(this);
    this.handleMatchreq = this.handleMatchreq.bind(this);
    this.randerAlldata = this.randerAlldata.bind(this);
    this.backHandle = this.backHandle.bind(this);
    this.state = {
      isOpen: false,
      likeClicked: false,
      passClicked: false,
      photoClicked: false,
      backClicked: false,
      empty: false,
      users: [],
      thisuserdata: {},
      items: [
        {
          src: 'https://www.organicfacts.net/wp-content/uploads/candogseatfigs.jpg',
          w: 1200,
          h: 900,
          title: 'Image 1'
        },
        {
          src: 'http://www.pethealthnetwork.com/sites/default/files/content/images/prev_normal-abnormalities-in-dogs179216570.jpg',
          w: 1200,
          h: 900,
          title: 'Image 2'
        },
        {
          src: 'http://www.pethealthnetwork.com/sites/default/files/content/images/prev_normal-abnormalities-in-dogs179216570.jpg',
          w: 1200,
          h: 900,
          title: 'Image 3'
        }
      ],
      galleryItems: [
        {
          src: 'https://www.organicfacts.net/wp-content/uploads/candogseatfigs.jpg',
          thumbnail: 'https://www.organicfacts.net/wp-content/uploads/candogseatfigs.jpg',
          w: 1200,
          h: 900,
          title: 'Image 1'
        },
        {
          src: 'http://www.pethealthnetwork.com/sites/default/files/content/images/prev_normal-abnormalities-in-dogs179216570.jpg',
          thumbnail: 'http://www.pethealthnetwork.com/sites/default/files/content/images/prev_normal-abnormalities-in-dogs179216570.jpg',
          w: 1200,
          h: 900,
          title: 'Image 2'
        },
        {
          src: 'https://canna-pet.com/wp-content/uploads/2017/08/impetigo-in-dogs_canna-pet-e1501630812568.jpg',
          thumbnail: 'https://canna-pet.com/wp-content/uploads/2017/08/impetigo-in-dogs_canna-pet-e1501630812568.jpg',
          w: 1200,
          h: 900,
          title: 'Image 3'
        },
        {
          src: 'http://www.pethealthnetwork.com/sites/default/files/content/images/prev_thyroid-dogs177494230.jpg',
          thumbnail: 'http://www.pethealthnetwork.com/sites/default/files/content/images/prev_thyroid-dogs177494230.jpg',
          w: 1200,
          h: 900,
          title: 'Image 4'
        }
      ],
      options: {}
    };
  }
  openPhotoSwipe(e) {
    e.preventDefault();
    this.setState({
      isOpen: true,
      options: {
        closeOnScroll: false
      }
    });
  };

  handleClose() {
    this.setState({
      isOpen: false
    });
  };

  getThumbnailContent(item) {
    return (
      <img src={item.thumbnail} width={120} height={90} />
    );
   };

  componentWillMount() {
    helpers.findNear(this.props.zipcode, this.props.id).then((res) => {
      console.log(res)
      if(res.data.length === 0){
        this.setState({
          empty: true
        })
      }else{
      this.setState({
        users: res.data,
        thisuserdata: res.data[0],
        empty: false
      })
    }
    })
  }

  handelLikeclick() {
    this.setState({
      likeClicked: true,
      passClicked: false
    })
    this.handleMatchreq()
  }
  handelPassclick() {
    this.setState({
      likeClicked: false,
      passClicked: true
    })
    // this.handleMatchreq()
  }

  handelMoving() {
    let usersArr = this.state.users;
    if (count >= usersArr.length ) {
      count = 1;
      // this.setState({ count: 0 });
      this.handelMoving()
    } else {

      console.log(count)

      console.log(usersArr[count])
      this.setState({
        thisuserdata: usersArr[count]
      })
      // this.setState({ count: this.state.count + 1 })
      count++
    }
  }

  randPhotolink() {
 let firstUser = this.state.users;
 console.log(firstUser[0])
    return (
      <div>
        <h2 style={Object.assign({}, textStyle, paddingStyle)}>Hold My Paw?</h2>
        {this.state.likeClicked || this.state.passClicked ? (<div>
          <a href="#" onClick={this.randerAlldata}>
            <img style={uploadStyle} src={this.state.thisuserdata.photo_url} />
          </a>
        </div>) : (<div>
          <a href="#" onClick={this.randerAlldata}>
            <img src={this.state.thisuserdata.photo_url} />
          </a>
        </div>)}


        <h3 style={textStyle}>{this.state.thisuserdata.name}, {this.state.thisuserdata.age} </h3>
        {/* Pass Button */}
        <input type="image" onClick={() => { this.handelMoving(); this.handelPassclick(); }} style={Object.assign({}, buttonStyle, floatLeft)} src="./img/Pass.png" />
        {/* Like Button */}
        <input type="image" onClick={() => { this.handelMoving(); this.handelLikeclick(); }} style={Object.assign({}, buttonStyle, floatRight)} src="./img/Like.png" />

        <PhotoSwipe isOpen={this.state.isOpen} items={this.state.items}
          options={this.state.options}
          onClose={this.handleClose} />
        <hr style={clearFloats}/>
        <h2  >Who barks nearby?</h2>
        <hr />
        <PhotoSwipeGallery items={this.state.galleryItems}
          thumbnailContent={this.getThumbnailContent} />
      </div>

    )
  }
  randerAlldata(event) {
    event.preventDefault();
    this.setState({
      photoClicked: true,
      backClicked: false
    })
  }
  renderMatces() {
    console.log(this.state.thisuserdata)
    return (
      <div>
        <img src={this.state.thisuserdata.photo_url} />
        <h2 style={textStyle}>{this.state.thisuserdata.name}, {this.state.thisuserdata.age} </h2>
        <hr />
        <div className="form-group">
          <label htmlFor="breed" style={textStyle}> Breed: </label>
          {this.state.thisuserdata.breed}
        </div>
        <div className="form-group">
          <label htmlFor="likes" style={textStyle}> Likes: </label>
          {this.state.thisuserdata.likes}
        </div>
        <div className="form-group">
          <label htmlFor="dislikes" style={textStyle}> Dislikes: </label>
          {this.state.thisuserdata.dislikes}
        </div>
        <div className="form-group">
          <label htmlFor="favTreat" style={textStyle}> Favorite Treats: </label>
          {this.state.thisuserdata.favTreat}
        </div>
        <div className="form-group">
          <label htmlFor="zipcode" style={textStyle}> Zip Code: </label>
          {this.state.thisuserdata.zipcode}
        </div>

        <button style={backButton} type="submit" onClick={this.backHandle}>Back</button>
      </div>
    )
  }

  backHandle(event) {
    event.preventDefault();
    this.setState({
      backClicked: true,
      photoClicked: false
    })
  }

  handleMatchreq() {
    console.log(this.props.id + "matches id here!!!!!!!!!!!!!")
    if (this.state.likeClicked) {
      helpers.matchRequest(this.props.id, this.state.thisuserdata.id, true)
    } else if (this.state.passClicked) {
      helpers.matchRequest(this.props.id, this.state.thisuserdata.id, false)
    }
  }

  render() {
    console.log(this.props.zipcode + " " + this.props.id + " "+this.state.empty)
if(this.state.empty){ return(<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/UK_traffic_sign_PROHIBIT.svg/1024px-UK_traffic_sign_PROHIBIT.svg.png"/>)}else{
    return (

      <div className='layout-page'>
        <main className='layout-main'>
          <div className='container'>
            {this.state.photoClicked ? this.renderMatces() : this.randPhotolink()}
          </div>
        </main>
      </div>
    );
  }
  }
}

// Export the module back to the route
export default Nearby;

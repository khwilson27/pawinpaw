// Include React as a dependency
import React from "react";
import ReactDOM from "react-dom";
import helpers from "../utils/helpers.js";
// import { PhotoSwipe } from 'react-photoswipe';
// import { PhotoSwipeGallery } from 'react-photoswipe';

import PropTypes from 'prop-types';
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
}

var displayStyle = {
    display: "inline",
}

var floatRight = {
    float: "right"
}

var floatLeft = {
    float: "left"
}

var clearFloats = {
    clear: "both"
}

var paddingStyle = {
    paddingBottom: "10px",
    marginTop: "0px"

}

var backButton = {
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

class Nearby extends React.Component {

    constructor(props, context) {
        super(props, context);

        // this.openPhotoSwipe = this.openPhotoSwipe.bind(this);
        // this.handleClose = this.handleClose.bind(this);
        // this.handelMoving = this.handelMoving.bind(this);
        this.handelLikeClick = this.handelLikeClick.bind(this);
        this.handelPassClick = this.handelPassClick.bind(this);
        // this.handleMatchreq = this.handleMatchreq.bind(this);
        // this.randerAlldata = this.randerAlldata.bind(this);
        this.handleBackBtn = this.handleBackBtn.bind(this);

        this.state = {
            showProfile: false,
            nearbyUsers: [],
            count: 0,

            //   items: [
            //     {
            //       src: 'https://www.organicfacts.net/wp-content/uploads/candogseatfigs.jpg',
            //       w: 1200,
            //       h: 900,
            //       title: 'Image 1'
            //     },
            //     {
            //       src: 'http://www.pethealthnetwork.com/sites/default/files/content/images/prev_normal-abnormalities-in-dogs179216570.jpg',
            //       w: 1200,
            //       h: 900,
            //       title: 'Image 2'
            //     },
            //     {
            //       src: 'http://www.pethealthnetwork.com/sites/default/files/content/images/prev_normal-abnormalities-in-dogs179216570.jpg',
            //       w: 1200,
            //       h: 900,
            //       title: 'Image 3'
            //     }
            //   ],

            //   galleryItems: [
            //     {
            //       src: 'https://www.organicfacts.net/wp-content/uploads/candogseatfigs.jpg',
            //       thumbnail: 'https://www.organicfacts.net/wp-content/uploads/candogseatfigs.jpg',
            //       w: 1200,
            //       h: 900,
            //       title: 'Image 1'
            //     },
            //     {
            //       src: 'http://www.pethealthnetwork.com/sites/default/files/content/images/prev_normal-abnormalities-in-dogs179216570.jpg',
            //       thumbnail: 'http://www.pethealthnetwork.com/sites/default/files/content/images/prev_normal-abnormalities-in-dogs179216570.jpg',
            //       w: 1200,
            //       h: 900,
            //       title: 'Image 2'
            //     },
            //     {
            //       src: 'https://canna-pet.com/wp-content/uploads/2017/08/impetigo-in-dogs_canna-pet-e1501630812568.jpg',
            //       thumbnail: 'https://canna-pet.com/wp-content/uploads/2017/08/impetigo-in-dogs_canna-pet-e1501630812568.jpg',
            //       w: 1200,
            //       h: 900,
            //       title: 'Image 3'
            //     },
            //     {
            //       src: 'http://www.pethealthnetwork.com/sites/default/files/content/images/prev_thyroid-dogs177494230.jpg',
            //       thumbnail: 'http://www.pethealthnetwork.com/sites/default/files/content/images/prev_thyroid-dogs177494230.jpg',
            //       w: 1200,
            //       h: 900,
            //       title: 'Image 4'
            //     }
            //   ],
            //   options: {}
        };
    }
    //   openPhotoSwipe(e) {
    //     e.preventDefault();
    //     this.setState({
    //       isOpen: true,
    //       options: {
    //         closeOnScroll: false
    //       }
    //     });
    //   };

    //   handleClose() {
    //     this.setState({
    //       isOpen: false
    //     });
    //   };

    //   getThumbnailContent(item) {
    //     return (
    //       <img src={item.thumbnail} width={120} height={90} />
    //     );
    //    };

    componentWillMount() {
        helpers.findNear(this.props.zipcode, this.props.id).then((res) => {
            console.log(res);

            this.setState({
                nearbyUsers: res.data,
            })

        })
    }

    handleLikeClick() {
        helpers.matchRequest(this.props.id, this.state.thisuserdata.id, true);
        this.setState({
            count: this.state.count + 1
        });
    }

    handlePassClick() {
        helpers.matchRequest(this.props.id, this.state.thisuserdata.id, false);
        this.setState({
            count: this.state.count + 1
        });
    }

    handleBackBtn() {
        this.setState({
            showProfile: false
        })
    }

    handleImgClick() {
        this.setState({
            showProfile: true
        })
    }

    renderCurrentCard() {

        return (
            <div>
                <h2 style={Object.assign({}, textStyle, paddingStyle)}>Hold My Paw?</h2>
                <img style={uploadStyle} src={this.state.nearbyUsers[this.state.count].photo_url} onClick={this.handleImgClick} />

                <h3 style={textStyle}>{this.state.nearbyUsers[this.state.count].name}, {this.state.nearbyUsers[this.state.count].age} </h3>

                {/* Pass Button */}
                <input type="image" onClick={this.handlePassClick()} style={Object.assign({}, buttonStyle, floatLeft)} src="./img/Pass.png" />
                {/* Like Button */}
                <input type="image" onClick={this.handleLikeClick()} style={Object.assign({}, buttonStyle, floatRight)} src="./img/Like.png" />

                {/* <PhotoSwipe isOpen={this.state.isOpen} items={this.state.items}
                    options={this.state.options}
                    onClose={this.handleClose} />
                <hr style={clearFloats} />
                <h2 style={infoStyle}>Who barks nearby?</h2>
                <hr />
                <PhotoSwipeGallery items={this.state.galleryItems}
                    thumbnailContent={this.getThumbnailContent} /> */}
            </div>

        )
    }

    //   randerAlldata(event) {
    //     event.preventDefault();
    //     this.setState({
    //       photoClicked: true,
    //       backClicked: false
    //     })
    //   }

    renderProfile() {
        console.log(this.state.nearbyUsers[this.state.count]);

        return (
            <div>
                <img src={this.state.nearbyUsers[this.state.count].photo_url} />
                <h2 style={textStyle}>{this.state.nearbyUsers[this.state.count].name}, {this.state.nearbyUsers[this.state.count].age} </h2>
                <hr />
                <div className="form-group">
                    <label htmlFor="breed" style={textStyle}> Breed: </label>
                    {this.state.nearbyUsers[this.state.count].breed}
                </div>
                <div className="form-group">
                    <label htmlFor="likes" style={textStyle}> Likes: </label>
                    {this.state.nearbyUsers[this.state.count].likes}
                </div>
                <div className="form-group">
                    <label htmlFor="dislikes" style={textStyle}> Dislikes: </label>
                    {this.state.nearbyUsers[this.state.count].dislikes}
                </div>
                <div className="form-group">
                    <label htmlFor="favTreat" style={textStyle}> Favorite Treats: </label>
                    {this.state.nearbyUsers[this.state.count].favTreat}
                </div>
                <div className="form-group">
                    <label htmlFor="zipcode" style={textStyle}> Zip Code: </label>
                    {this.state.nearbyUsers[this.state.count].zipcode}
                </div>

                <button style={backButton} type="submit" onClick={this.handleBackBtn}>Back</button>
            </div>
        )
    }

    render() {
        console.log(this.props.zipcode + " " + this.props.id + " " + this.state.empty)
        if (this.state.nearbyUsers[this.state.count]) {
            return (
                <div className='layout-page'>
                    <main className='layout-main'>
                        <div className='container'>
                            {this.state.showProfile ? this.renderProfile() : this.renderCurrentCard()}
                        </div>
                    </main>
                </div>
            );
        } else {
            return (
                <div className='layout-page'>
                    <main className='layout-main'>
                        <div className='container'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/UK_traffic_sign_PROHIBIT.svg/1024px-UK_traffic_sign_PROHIBIT.svg.png" />)
                        </div>
                    </main>
                </div>
            )
        }
    }
}

// Export the module back to the route
export default Nearby;

// Include React as a dependency
import React from "react";
import helpers from "../utils/helpers.js";

var Link = require("react-router").Link;
var router = require("react-router");
var browserHistory = router.browserHistory;

var inputStyle = {
    borderColor: "#FFB74D",
    borderWidth: "2px",
    borderStyle: "solid"
}

// Create the Main component
class Match extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            matchProfiles: null,
            matchClicked: false,

            id: "",
            name: "",
            age: "",
            breed: "",
            likes: "",
            dislikes: "",
            favTreat: "",
            zipcode: "",
            photoUrl: "",
            photo_publicid: "",
            email: ""
        };

        this.showMatchInfo = this.showMatchInfo.bind(this);
        this.handleDoneBtn = this.handleDoneBtn.bind(this);
        this.handleUnmatch = this.handleUnmatch.bind(this);
    }

    // When this component mounts, get all user's matches and set it to state
    componentDidMount() {
        helpers.findMatches(this.props.id)
        // helpers.findMatches(1)
            .then((matchProfiles) => {
                this.setState({ matchProfiles: matchProfiles.data });
                console.log("matches", matchProfiles);
            })
            .catch(function (err) {
                console.error('err', err);
            });
    }

    // // This code handles the clicking on a match
    showMatchInfo(event) {
        console.log(event.target.dataset);
        console.log("event", event.target.dataset['photourl']);

        this.setState({
            matchClicked: true,

            id: event.target.dataset['id'],
            name: event.target.dataset['name'],
            age: event.target.dataset['age'],
            breed: event.target.dataset['breed'],
            likes: event.target.dataset['likes'],
            dislikes: event.target.dataset['dislikes'],
            favTreat: event.target.dataset['favtreat'],
            zipcode: event.target.dataset['zipcode'],
            photoUrl: event.target.dataset['photourl'],
            email: event.target.dataset['email']
        })
    }

    handleDoneBtn() {
        this.setState({
            matchClicked: false
        })
    }

    handleUnmatch() {
        helpers.unmatchUser(this.props.id, this.state.id)
            .then((response) => {

                helpers.findMatches(this.props.id)
                    .then((matchProfiles) => {
                        this.setState({ matchProfiles: matchProfiles.data, matchClicked: false });
                    })
                    .catch(function (err) {
                        console.error('err', err);
                    });

            })
            .catch(function (err) {
                console.error('err', err);
            });
    }

    renderMatchSwitch() {
        if (this.state.matchProfiles) {
            return this.renderMatches()
        } else {
            return this.renderEmpty()
        }
    }

    renderEmpty() {
        return (
            <h1>No matches yet...</h1>
        )
    }

    renderMatches() {
        // console.log("full");

        return this.state.matchProfiles.map((currentValue, index) => {
            console.log(currentValue);
            return (
                <div className="row" key={currentValue.id}>
                    <div className="col-sm-12" onClick={this.showMatchInfo} data-name={currentValue.name} data-age={currentValue.age} data-breed={currentValue.breed} data-likes={currentValue.likes} data-dislikes={currentValue.dislikes} data-favTreat={currentValue.favTreat} data-zipcode={currentValue.zipcode} data-photourl={currentValue.photo_url} data-email={currentValue.email} data-id={currentValue.id} >
                        <img src={currentValue.photo_url} width={150} height={150} />
                        <p>{currentValue.name}</p>
                    </div>
                </div>

            )

        })


    }

    renderData() {

        return (
            <form>

                <img src={this.state.photoUrl} />

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
                <div className="form-group">
                    <label htmlFor="email" style={inputStyle}> Contact Me: </label>
                    {this.state.email}
                </div>

                <button onClick={this.handleDoneBtn} type="button" className="btn btn-primary">Done</button>
                <button onClick={this.handleUnmatch} type="button" className="btn btn-warning">Unmatch</button>
            </form>
        )
    }

    // Our render method. Utilizing a few helper methods to keep this logic clean
    render() {
        return (
            <div className="container">
                {this.state.matchClicked ? this.renderData() : this.renderMatchSwitch()}
            </div>
        )
    }
};

// Export the module back to the route
export default Match;

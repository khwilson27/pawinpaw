// Include React as a dependency
import React from "react";
import helpers from "../utils/helpers.js";

var Link = require("react-router").Link;
var router = require("react-router");
var browserHistory = router.browserHistory;

// Create the Main component
class Match extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            matchIds: null,
            matchProfiles: []
        };
    }

    // When this component mounts, get all user's matches and set it to state
    componentDidMount() {
        // helpers.findMatches(this.props.id)
        helpers.findMatches(1)
            .then((matchIds) => {
                this.setState({ matchIds: matchIds.data.matchId });
                // console.log("matches", matchIds);
            })
            .catch(function (err) {
                console.error('err', err);
            });
    }

    // // This code handles the clicking on a match
    handleClick() {
    }

    renderEmpty() {
        return (
            <div>
                <h1>No matches yet...</h1>
            </div>
        )
    }

    renderMatches() {
        // console.log(this.state.matchIds);
        this.state.matchIds.map((currentValue, index) => {
            // console.log(currentValue);

            helpers.findMatchProfile(currentValue)
                .then(matchProfile => {
                    console.log(matchProfile);
                })


        })

    }

    // Our render method. Utilizing a few helper methods to keep this logic clean
    render() {
        return (
            <div>
                <h1>Matches Page</h1>
                {this.state.matchIds ? this.renderMatches() : this.renderEmpty()}
            </div>
        )
    }
};

// Export the module back to the route
export default Match;

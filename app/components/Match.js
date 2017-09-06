// Include React as a dependency
import React from "react";
import helpers from "../utils/helpers.js";

var Link = require("react-router").Link;
var router = require("react-router");
var browserHistory = router.browserHistory;

// Create the Main component
class Match extends React.Componenet {

    constructor(props) {
        super(props);

        this.state = {
            matchIds: []
        };
    }

    // When this component mounts, get all saved articles from our db
    componentDidMount() {
        // helpers.getMatches(this.props.id)
        helpers.getMatches(1)
            .then((matchIds) => {
                this.setState({ matchIds });
                console.log("matches", matchIds);
            })
            .catch(function (err) {
                console.error('err', err);
            });
    }

    // // This code handles the clicking on a match
    // handleClick(item) {
    //     console.log("CLICKED");
    //     console.log(item);

    //     // Delete the list!
    //     helpers.deleteSaved(item.title, item.date, item.url).then(function () {

    //         // Get the revised list!
    //         helpers.getSaved().then(function (articleData) {
    //             this.setState({ savedArticles: articleData.data });
    //             console.log("saved results", articleData.data);
    //         }.bind(this));

    //     }.bind(this));
    // }
    // // A helper method for rendering the HTML when we have no saved articles
    // renderEmpty() {
    //     return (
    //         <li className="list-group-item">
    //             <h3>
    //                 <span>
    //                     <em>Save your first article...</em>
    //                 </span>
    //             </h3>
    //         </li>
    //     );
    // }

    // // A helper method for mapping through our articles and outputting some HTML
    // renderArticles() {
    //     return this.state.savedArticles.map(function (article, index) {

    //         return (
    //             <div key={index}>
    //                 <li className="list-group-item">
    //                     <h3>
    //                         <span>
    //                             <em>{article.title}</em>
    //                         </span>
    //                         <span className="btn-group pull-right">
    //                             <a href={article.url} rel="noopener noreferrer" target="_blank">
    //                                 <button className="btn btn-default ">View Article</button>
    //                             </a>
    //                             <button className="btn btn-primary" onClick={() => this.handleClick(article)}>Delete</button>
    //                         </span>
    //                     </h3>
    //                     <p>Date Published: {article.date}</p>
    //                 </li>
    //             </div>
    //         );
    //     }.bind(this));
    // }

    // // A helper method for rendering a container and all of our artiles inside
    // renderContainer() {
    //     return (
    //         <div className="main-container">
    //             <div className="row">
    //                 <div className="col-lg-12">
    //                     <div className="panel panel-primary">
    //                         <div className="panel-heading">
    //                             <h1 className="panel-title">
    //                                 <strong>
    //                                     <i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong>
    //                             </h1>
    //                         </div>
    //                         <div className="panel-body">
    //                             <ul className="list-group">
    //                                 {this.renderArticles()}
    //                             </ul>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }
    // Our render method. Utilizing a few helper methods to keep this logic clean
    render() {
        // // If we have no articles, we will return this.renderEmpty() which in turn returns some HTML
        // if (!this.state.savedArticles) {
        //     return this.renderEmpty();
        // }
        // // If we have articles, return this.renderContainer() which in turn returns all saves articles
        // return this.renderContainer();
        <div>Matches Page</div>
    }
};

// Export the module back to the route
export default Match;

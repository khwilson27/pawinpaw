// Include the Axios library for HTTP requests
var axios = require("axios");


// Helper Functions
var helpers = {

    //SignUp New User
    regNewuser: function(email, password) {
        var newUser = { email, password };
        return axios.post("/api/register", newUser)
            .then(function(response) {
                console.log(response);
            });
    },

    userLogin: function(email, password) {
        var loggingUser = { email, password };
        return axios.post("/api/login", loggingUser)
            .then(function(response) {
                console.log(response);

            });
    },
    findNear: function(zipcode, email) {
        axios.get('/api/users/nearby', {
                params: {
                    zipcode,
                    email
                }
            })
            .then(function(response) {
                console.log(response);
            });
    }

};


// We export the helpers function
module.exports = helpers;
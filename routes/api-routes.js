var db = require("../models");
var crypto = require("crypto");
var Passsalthash = require("./passsalthash.js");
// import cloudinary from 'cloudinary';

// cloudinary.config({ 
//   cloud_name: 'sample', 
//   api_key: '874837483274837', 
//   api_secret: 'a676b67565c6767a6767d6767f676fe1' 
// });

module.exports = function (app) {
    //Reg Route
    app.post("/api/register", function (req, res) {
        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(function (data) {
            if (data) {
                console.log("this email is used before do you like to login");
                res.json({ message: "this email is used before do you like to login" })
            } else {
                //Create new user 
                var newUser = {
                    email: req.body.email,
                    password: req.body.password
                }
                Passsalthash.register(newUser).then(function (result) {
                    console.log(result)
                    res.json(result);
                })
                    .catch(function (error) {
                        console.error(error);
                        res.json({ error: error.message });
                    });
            }
        });
    });
    //Login
    app.post("/api/login", function (req, res) {
        var logginginUser = {
            email: req.body.email,
            password: req.body.password
        }
        Passsalthash.logIn(logginginUser, res);
    });
    //Get all USERS info 
    app.get("/api/users", function (req, res) {
        db.User.findAll({}).then(function (data) {
            console.log(data);
            //JSON of all users
            return res.json(data);
        });
    });
    //Get all unmatched potential users for main user to pick from 
    app.get("/api/users/nearby/:zipcode/:email", function (req, res) {
        db.User.findAll({
            where: {
                zipcode: req.params.zipcode,
                email: { $ne: req.params.email }
            },
            attributes: { exclude: ['password', 'salt'] }
        }).then(function (data) {
            console.log(data);
            res.json(data);
        });
    });
    // Get all existing matches for user to view
    // 1. Query all matches where the logged-in user is the UserId (author of it)
    // 2. Query all of the matches where the logged-in user is the matchId (receiver of a request)
    // 3. Compare the matches where they sender and receiver are the same 2 parties, then evaluate if they're both true (both like)
    // 4. Push matchIds of successful matches into an array and respond to api request
    app.get("/api/users/matches/:userid", function (req, res) {
        db.Match.findAll({
            where: {
                UserId: req.params.userid
            },
        }).then(function (userActionData) {
            // console.log("==========================USERACTION=======================");
            // console.log(userActionData);
            db.Match.findAll({
                where: {
                    matchId: req.params.userid
                },
            }).then(function (matchActionData) {
                // console.log("==========================MATCHACTION=======================");
                // console.log(matchActionData);
                var matchArr = [];
                for (var i = 0; i < userActionData.length; i++) {
                    for (var j = 0; j < matchActionData.length; j++) {
                        if (userActionData[i].matchId == matchActionData[j].UserId && userActionData[i].request && matchActionData[j].request) {
                            matchArr.push(userActionData[i].matchId);
                            break;
                        }
                    }
                }
                var data = {
                    matchId: matchArr
                };
                res.json(data);
            });
        });
    });

    //Edit user profile
    app.put("/api/profile", function (req, res) {
        db.User.update({
            name: req.body.name,
            age: req.body.age,
            breed: req.body.breed,
            likes: req.body.likes,
            dislikes: req.body.dislikes,
            favTreat: req.body.favTreat,
            zipcode: req.body.zipcode,
            photo: req.body.photo,
        }, {
                where: {
                    id: req.body.id
                }
            }).then(function (data) {
                if (data) {
                    res.json({ message: "Successful update!" });
                } else {
                    res.json({ message: "Unsuccessful..." });
                }
            });
    });
    //Post like or pass data
    app.post("/api/match/post", function (req, res) {
        db.Match.create({
            UserId: req.body.id,
            matchId: req.body.matchId,
            request: req.body.request
        }).then(function (data) {
            res.json(data);
        });
    });
}
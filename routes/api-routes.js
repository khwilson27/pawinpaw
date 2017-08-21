var db = require("../models");
var crypto = require("crypto");
var Passsalthash = require("./passsalthash.js");

module.exports = function (app) {

    //Reg Route
    app.post("/api/register", function (req, res) {

        db.User.findOne({
            where: {
                email: user.email
            }
        }).then(function (data) {
            if (data) {
                console.log("this email is used before do you like to login");
                res.send("this email is used before do you like to login")
            } else {

                //Create new user 
                var newUser = {
                    email: req.body.email,
                    password: req.body.password,
                    name: req.body.name,
                    photo: req.body.photo,
                    age: req.body.age,
                    zipcode: req.body.zipcode,
                    breed: req.body.breed,
                    likes: req.body.likes,
                    dislikes: req.body.dislikes,
                    favTreat: req.body.favTreat,
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

        })

    });


    //Get all unmatched potential users for main user to pick from 
    app.get("/api/users/nearby", function (req, res) {

        db.User.findAll({
            where: {
                zipcode: req.body.zipcode
            },
            attributes: { exclude: ['password', 'salt'] }
        }).then(function (data) {
            console.log(data);
            res.json(data);
        })

    });

    //Get all existing matches for user to view
    app.get("/api/users/nearby", function (req, res) {

        db.Match.findAll({
            where: {
                UserId: req.body.id
            },
        }).then(function (userAction) {
            // console.log(data);
            // res.json(data);

            db.Match.findAll({
                where: {
                    matchId: req.body.id
                },
            }).then(function (matchAction) {

                const matchArr = [];

                for (const i = 0; i < userAction.length; i++) {
                    for (const j = 0; j < matchAction.length; j++) {
                        if (userAction[i].matchId == matchAction[j].UserId && userAction[i].request && matchAction[j].request) {
                            matchArr.push()
                        }
                    }
                    
                }

                const data = {
                    matches: matchArr
                }

                console.log(data);
                res.json(data);
            })

        })

    });


    //Edit user profile
    app.put("/api/profile/update", function (req, res) {

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
                    email: req.body.email
                }
            }).then(function (data) {
                res.json(data);
            });

    });

    //Post like or pass data
    app.post("/api/match/post", function (req, res) {

        db.Match.create({
            UserId: req.body.id,
            matchId: req.body.matchId,
            request: req.body.request,
        }).then(function (data) {
            res.json(data);
        });

    });


}
var db = require("../models");
var crypto = require("crypto");
var Passsalthash = require("./passsalthash.js");

module.exports = function(app) {

    //Reg Route
    app.post("/api", function(req, res) {

        db.User.findOne({
            where: {
                email: user.email

            }
        }).then(function(data) {
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

                Passsalthash.register(newUser).then(function(result) {
                        console.log(result)
                        res.json(result);
                    })
                    .catch(function(error) {
                        console.error(error);
                        res.json({ error: error.message });

                    });
            }

        });
    });


    //Login
    app.post("/api/login", function(req, res) {
        var logginginUser = {
            email: req.body.email,
            password: req.body.password
        }
        Passsalthash.logIn(logginginUser, res);


    });



    //Get all USERS info 
    app.get("/api", function(req, res) {

        db.User.findAll({}).then(function(data) {
            console.log(data);
            //JSON of all users
            return res.json(data);

        })



    })


}
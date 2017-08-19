var db = require("../models");
var crypto = require("crypto");
var Passsalthash = {



    register: function(user) {
        user.salt = crypto.randomBytes(16).toString('hex')
        user.generateHash = crypto.pbkdf2Sync(user.password, user.salt, 1000, 512, 'sha512').toString('hex');

        return db.User.create({
            //key value pair goes here.
            email: user.email,
            password: user.generateHash,
            salt: user.salt,
            name: user.name,
            photo: user.photo,
            age: user.age,
            zipcode: user.zipcode,
            breed: user.breed,
            likes: user.likes,
            dislikes: user.dislikes,
            favTreat: user.favTreat,

        })
    },

    logIn: function(user) {

        db.User.findOne({
            where: {
                email: user.email

            }
        }).then(function(data) {


            if (!data) { console.log("please check your email and password"); } else {
                var hashToCheckAgainst = data.hash;
                var saltToUse = data.salt;
                var providedHash = crypto.pbkdf2Sync(user.password, saltToUse, 1000, 512, 'sha512').toString('hex');

                if (hashToCheckAgainst === providedHash) {

                    console.log(" good job");
                    res.json(data);

                } else {
                    console.log("Wrong Password!");
                    res.send("Wrong Password!")
                }
            }

            return data;
        })

    }
}

module.exports = Passsalthash;
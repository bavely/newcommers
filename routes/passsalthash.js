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
            salt: user.salt

        })
    },

    logIn: function(user, res) {

        db.User.findOne({
            where: {
                email: user.email
            }
        }).then(function(data) {

            console.log(data);

            if (!data) { console.log("please check your email and password"); } else {
                var hashToCheckAgainst = data.password;
                var saltToUse = data.salt;
                var providedHash = crypto.pbkdf2Sync(user.password, saltToUse, 1000, 512, 'sha512').toString('hex');

                if (hashToCheckAgainst === providedHash) {

                    console.log("good job, login successful!");
                    res.json(data);

                } else {
                    console.log("Wrong Password!");
                    res.json({ message: "Wrong Email Or Password!" })
                }
            }
        })

    }
}

module.exports = Passsalthash;
const express = require('express');
const MemberDB = require('../models/Member');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Register</h1>')
});

router.post('/', (req, res) => {
    var username = req.body.username
    var password = req.body.password
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var DoB = req.body.DoB
    var gender = req.body.gender
    var address = req.body.address
    var email = req.body.email
    var tel = req.body.tel
    var ProfilePic = req.body.ProfilePic

    MemberDB.findOne({
        username: req.body.username
    }, (err,doc) => {
        if (err) throw err;
        if (doc) { //user already exists
            res.send({ err : 'user already exists'})
        }
        else { // new user
            const memberdata = new MemberDB({
                username: username,
                password: password,
                firstname: firstname,
                lastname: lastname,
                DoB: DoB,
                gender: gender,
                address: address,
                email: email,
                tel: tel,
                ProfilePic: ProfilePic
            });
            memberdata.save((err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send();
                }
                res.send({
                    username: memberdata.username,
                    password: memberdata.password,
                    status: 200,
                    statusTxt: 'OK'
                });
            });
        }
    })
})

module.exports = router;
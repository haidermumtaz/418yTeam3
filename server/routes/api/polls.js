// Created by Jordan Le | Reference: https://expressjs.com/en/guide/routing.html 
const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

const Poll = require("../../models/Polls");

// @route POST api/users/createpoll
// @desc Register Poll
// @access Public
router.post("/createpoll", (req, res) => {
    const newPoll = new Poll({
        question: req.body.question,
        field1: req.body.field1,
        field2: req.body.field2,
        field3: req.body.field3,
        field4: req.body.field4,
        field5: req.body.field5,
        field6: req.body.field6,
        field7: req.body.field7,
        field8: req.body.field8,
        field9: req.body.field9
    });

    // Saves the poll to the database with proper data
    newPoll.save()
	.then(poll => res.json(poll))
	.catch(err => console.log(err));

});

module.exports = router;
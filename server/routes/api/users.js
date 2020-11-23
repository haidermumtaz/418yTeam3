// Robert McIlrath
// References code by Rishi Prasad from tutorial: https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669
// Most modifications to code were to require a unique username/ add username concept, other modifications were minor
// I created the MongoDB database and collection for users, connected into POST requests for login/ register

// This page uses jwt; Source: https://jwt.io/

// This code defines API routes for registration and login
// Register requires a correctly formatted unique email (X@Y.Z), a unique username, and a matching password 10 characters long entered twice 
// Register hashes password before putting into database
// Login requires an email with a password, email must be a user in the database, password must match hash in database

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
	// Form validation  
	const { errors, isValid } = validateRegisterInput(req.body);
	
	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}
	
	// Check email is not in database
	User.findOne({email: req.body.email}).then(user =>{
		if (user) {
			return res.status(400).json({email: "Email already exists" });
		} else {
			// Check username is not in database
			User.findOne({username: req.body.username}).then(user =>{
				if (user) {
					return res.status(400).json({username: "Username already exists" });
				// If both succeed...
				} else {
					// Construct the new user
					const newUser = new User({
						username: req.body.username,
						email: req.body.email,
						password: req.body.password
					});

					// Hash password before saving in database
					bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err;
						newUser.password = hash;
						newUser
							.save()
							.then(user => res.json(user))
							.catch(err => console.log(err));
						});
					});
				}
			});
		}
	});	
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
	// Form validation
	const { errors, isValid } = validateLoginInput(req.body);
	
	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}
	const email = req.body.email;
	const password = req.body.password;

	// Find user by email
	User.findOne({ email }).then(user => {
		// Check if user exists
		if (!user) {
		  return res.status(404).json({ emailnotfound: "Email not found" });
		}
		
		// Check password
		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				// User matched
				// Create JWT Payload
				const payload = {
					id: user.id,
					username: user.username
				};
			
				// Sign token
				jwt.sign(
					payload,
					keys.secretOrKey,
					{
						expiresIn: 31556926 // 1 year in seconds
					},
					(err, token) => {
						res.json({
							success: true,
							token: "Bearer " + token
						});
					}
				);	
			} else {
				return res
					.status(400)
					.json({ passwordincorrect: "Password incorrect" });
			}
		});
	});
});

module.exports = router;

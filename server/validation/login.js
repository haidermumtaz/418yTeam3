// Robert McIlrath
// References code by Rishi Prasad from tutorial: https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669
// Most modifications to code were to add username concept, other modifications were minor

// Checks that the email isn't empty and is valid
// Checks the password isn't empty
// Checks the username isn't empty

const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};
  
// Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  
  // Username check
  if (Validator.isEmpty(data.username)) {
    errors.password = "Username field is required";
  }
  
// Password check
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  
return {
    errors,
    isValid: isEmpty(errors)
  };
};

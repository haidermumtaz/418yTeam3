// Bianca Lavaud (helped with defining user structure)
// Robert McIlrath
// References code by Rishi Prasad from tutorial: https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669
// Most modifications to code were to require a unique username/ add username concept, other modifications were minor

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create User schema, requiring username, email, password and creation date (passes current date)
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);

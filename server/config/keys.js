// Robert McIlrath
// References code by Rishi Prasad from tutorial: https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669

// Configures key for export by connecting to my MongoDB cluster (Cluster #0) via my mongoURI

module.exports = {
	mongoURI: "mongodb+srv://rob_mcilrath:passwordbaby@cluster0.unnyg.mongodb.net/Cluster0?retryWrites=true&w=majority",
	secretOrKey: "secret"
};

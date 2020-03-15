require("dotenv").config();
const functions = require("firebase-functions");
require("firebase/firestore");

const app = require("express")();

const FBAuth = require("./util/FBAuth");

const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signUp, login, uploadImage } = require("./handlers/users");

//screams route
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);

//Users route
//Signup route
app.post("/signup", signUp);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);

exports.api = functions.region("europe-west1").https.onRequest(app);

require("dotenv").config();
const functions = require("firebase-functions");
require("firebase/firestore");

const app = require("express")();

const FBAuth = require("./util/FBAuth");

const {
  getAllScreams,
  postOneScream,
  getScream,
  commentOnScream
} = require("./handlers/screams");
const {
  signUp,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser
} = require("./handlers/users");

//screams route
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);
app.get("/scream/:screamId", getScream);
//Todo: delete scream
//Todo: like a scream
//Todo: unlike a scream
//Todo: comment on scream
app.post("/scream/:screamId/comment", FBAuth, commentOnScream);

//Users route
app.post("/signup", signUp);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);

exports.api = functions.region("europe-west1").https.onRequest(app);

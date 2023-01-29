const functions = require("firebase-functions");
const firebase = require('firebase-admin');

firebase.initializeApp();

const { createUserInDatabase } = require('./UserHandling')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/dofcs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


exports.createUser = functions.auth.user().onCreate(user => {
    createUserInDatabase(user)
});


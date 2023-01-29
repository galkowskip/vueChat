const firestore = require('firebase-admin').firestore()
const collectionRef = firestore.collection('users');

exports.createUserInDatabase = function createUserInDatabase(user) {

    const newUser = {
        displayName: user.displayName,
        email: user.email,
        id: user.uid
    }

    collectionRef.add(newUser)
        .then(docRef => {
            console.log(`Document written with ID: ${docRef}`);
        })
        .catch(error => {
            console.error(`Error adding document: ${error}`);
        });
} 
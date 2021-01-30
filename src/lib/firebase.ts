import firebase from "firebase";

const config = process.env.FIREBASE_CONFIG ?
    JSON.parse(process.env.FIREBASE_CONFIG)
    : {
        databaseURL: process.env.FIREBASE_DATABASE_URL,
    };

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

import firebase from "firebase";

const config = {
    databaseURL: process.env.FIREBASE_DATABASE_URL,
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

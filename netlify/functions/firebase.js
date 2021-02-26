const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyC0ZHUW5z7HIeELjtB_ClDyc2S5WzIYzy8",
    authDomain: "kiei-451-e6e88.firebaseapp.com",
    projectId: "kiei-451-e6e88",
    storageBucket: "kiei-451-e6e88.appspot.com",
    messagingSenderId: "436662605739",
    appId: "1:436662605739:web:e7f341ebdb000ea241e4ee"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase
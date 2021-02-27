import Rebase from "re-base"
import firebase from "firebase"

const fireBaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCLyXdohC9vr5kmoxqjroCTd1cRMkdxJBE",
    authDomain: "catch-of-the-day-pranavkhapra.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-pranavkhapra-default-rtdb.firebaseio.com",
    projectId: "catch-of-the-day-pranavkhapra",
    storageBucket: "catch-of-the-day-pranavkhapra.appspot.com",
    messagingSenderId: "786935328991",
    appId: "1:786935328991:web:61b152f74574ed37adf96a",
    measurementId: "G-3V5E5L2XCG"

})

const base=Rebase.createClass(fireBaseApp.database())


//named export
export {fireBaseApp}

//default esport the main exporteed form this base.js is base
export default base
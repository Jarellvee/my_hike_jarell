//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDL9I7jrmYUOEsfxfcjPJM_0iy78X77xGs",
    authDomain: "comp1800-202410-demo-9e7c3.firebaseapp.com",
    projectId: "comp1800-202410-demo-9e7c3",
    storageBucket: "comp1800-202410-demo-9e7c3.appspot.com",
    messagingSenderId: "1040014487234",
    appId: "1:1040014487234:web:4c3e303e62dd1bc799555b"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

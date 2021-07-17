import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC775jEL4oPdHVIuJbDsFig4upqPL6KQGw",
    authDomain: "facebookclone-93099.firebaseapp.com",
    projectId: "facebookclone-93099",
    storageBucket: "facebookclone-93099.appspot.com",
    messagingSenderId: "708741156432",
    appId: "1:708741156432:web:793f72f550f94887204b55",
    measurementId: "G-5V6Z89NV50"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {storage};
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyBhBaWtuu32trASNYEMpqttp_VxWqhqPrE",
    authDomain: "pwa-react-714d0.firebaseapp.com",
    databaseURL: "https://pwa-react-714d0.firebaseio.com",
    projectId: "pwa-react-714d0",
    storageBucket: "pwa-react-714d0.appspot.com",
    messagingSenderId: "573305489234",
    appId: "1:573305489234:web:1f6baf40ba35272bf91c8b"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const initMessaging = firebase.messaging();
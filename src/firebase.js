import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBhBaWtuu32trASNYEMpqttp_VxWqhqPrE",
    authDomain: "pwa-react-714d0.firebaseapp.com",
    databaseURL: "https://pwa-react-714d0.firebaseio.com",
    projectId: "pwa-react-714d0",
    storageBucket: "pwa-react-714d0.appspot.com",
    messagingSenderId: "573305489234",
    appId: "1:573305489234:web:1f6baf40ba35272bf91c8b"
}

firebase.initializeApp(config);

export default firebase
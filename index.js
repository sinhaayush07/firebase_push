import * as firebase from 'firebase'
import "firebase/messaging";
// let messaging = require('firebase/messaging')

const firebaseConfig = {
  apiKey: "AIzaSyBsPZn6aBALjZVq9m9_78CAYjbSiOeL6pI",
  authDomain: "testing-notifications-7313f.firebaseapp.com",
  databaseURL: "https://testing-notifications-7313f.firebaseio.com",
  projectId: "testing-notifications-7313f",
  storageBucket: "testing-notifications-7313f.appspot.com",
  messagingSenderId: "750280448366",
  appId: "1:750280448366:web:e909b6527df8265b25c97f",
  measurementId: "G-WJNDYZSCM1"
}

// navigator.serviceWorker.register('./firebase-messaging-sw.js')
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.requestPermission().then(res => {
  messaging.getToken().then(res => console.log(res)).catch(err => console.log(err, 'hey no token'))
}).catch(err => console.log(err))



messaging.onMessage(function (payload) {
  console.log('message: ', payload)
})

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
// console.log(firebase.messaging)
// messaging.getToken().then((currentToken) => {
//   if (currentToken) {
//     console.log(currentToken)
//     sendTokenToServer(currentToken);
//     updateUIForPushEnabled(currentToken);
//   } else {
//     // Show permission request.
//     console.log('No Instance ID token available. Request permission to generate one.');
//     // Show permission UI.
//     updateUIForPushPermissionRequired();
//     setTokenSentToServer(false);
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
//   showToken('Error retrieving Instance ID token. ', err);
//   setTokenSentToServer(false);
// });
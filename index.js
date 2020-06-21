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
  messaging.getToken().then(res => {
    let doc = document.createElement('div')
    doc.id = 'tokenId'
    doc.innerHTML = res
    document.getElementsByTagName('body')[0].appendChild(doc)
  }).catch(err => console.log(err, 'hey no token'))
}).catch(err => console.log(err))



messaging.onMessage(function (payload) {
  console.log('message: ', payload)
  console.log('v2')
  let not = new Notification(payload.title)
  console.log(not)
  return not
})

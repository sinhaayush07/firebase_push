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
  let notifictionObj = {
    body: payload.notification.body
  }
  const options = {
    actions: [
      {
        action: 'coffee-action',
        title: 'Coffee',
        icon: '/images/demos/action-1-128x128.png'
      },
      {
        action: 'doughnut-action',
        title: 'Doughnut',
        icon: '/images/demos/action-2-128x128.png'
      },
      {
        action: 'gramophone-action',
        title: 'gramophone',
        icon: '/images/demos/action-3-128x128.png'
      },
      {
        action: 'atom-action',
        title: 'Atom',
        icon: '/images/demos/action-4-128x128.png'
      }
    ]
  };
  return new Notification(payload.title, options)
})

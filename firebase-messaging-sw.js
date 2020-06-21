importScripts('https://www.gstatic.com/firebasejs/7.15.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.15.2/firebase-messaging.js')
// import * as firebase from 'firebase'
// import "firebase/messaging";
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


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();




messaging.setBackgroundMessageHandler(function (payload) {
  console.log('hey hit from the background handler')
  console.log(payload)
  if (Notification.permission === 'granted') {
    
  const options = {
    actions: [
      {
        action: 'coffee-action',
        title: 'Coffee',
        icon: '/images/demos/action-1-128x128.png'
      },
      {
        action: 'doughnut-action',
        title: 'Cuddle',
        icon: '/images/demos/action-2-128x128.png'
      },
    ]
  };
    return self.registration.showNotification('some title from background', options)
  }
})

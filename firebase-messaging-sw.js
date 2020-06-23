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

  self.addEventListener('notificationclick', function (e) {
    if(e.action === 'see-cats') {
      clients.openWindow('https://unsplash.com/wallpapers/cute/kitten').then(windowClient => windowClient ? windowClient.focus() : null)
    } else if (e.action === 'see-dogs') {
      clients.openWindow('https://unsplash.com/wallpapers/cute/puppy').then(windowClient => windowClient ? windowClient.focus() : null)
    }
  })

  if (Notification.permission === 'granted') {
    let title = payload.data.title
  const options = {
    body: payload.data.body,
    actions: payload.data.actions
  };
  self.registration.showNotification(title, options)
}


})

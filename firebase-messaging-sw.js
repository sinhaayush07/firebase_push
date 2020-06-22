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
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    actions: [
      {
        action: 'see-cats',
        title: 'Kittens',
        icon: '/images/demos/action-1-128x128.png'
      },
      {
        action: 'see-dogs',
        title: 'Puppies',
        icon: '/images/demos/action-2-128x128.png'
      },
    ]
  };
  self.registration.showNotification('Sample Notification', options)
  }
  self.addEventListener('notificationclick', function (e) {
    if(e.action === 'see-cats') {
      clients.openWindow('https://unsplash.com/wallpapers/cute/kitten').then(windowClient => windowClient ? windowClient.focus() : null)
    } else if (e.action === 'see-dogs') {
      clients.openWindow('https://unsplash.com/wallpapers/cute/puppy').then(windowClient => windowClient ? windowClient.focus() : null)
    }
  })
})

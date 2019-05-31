import {sendRoute} from './routes.js';
export const settingFirebase = () => {
 let firebaseConfig = {
    apiKey: "AIzaSyBqXmEOgcUZ6bSQYdaQ6Iz5DnW-OsSHQo0",
    authDomain: "mini-rs.firebaseapp.com",
    databaseURL: "https://mini-rs.firebaseio.com",
    projectId: "mini-rs",
    storageBucket: "mini-rs.appspot.com",
    messagingSenderId: "86658969001",
    appId: "1:86658969001:web:e008c200d76d675e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize rutas
  sendRoute();
}
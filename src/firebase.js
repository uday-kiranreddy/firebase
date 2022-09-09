import firebase  from "firebase";

const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyAwwyd5-BEcaJ23J5d4d_vGVOsR8azeHiM",
  authDomain: "todo-app-cp-29ae9.firebaseapp.com",
  projectId: "todo-app-cp-29ae9",
  storageBucket: "todo-app-cp-29ae9.appspot.com",
  messagingSenderId: "312806663658",
  appId: "1:312806663658:web:465ea9f70c038caeed3e93",
  measurementId: "G-WZE2G65VJN",
});


const db=firebaseApp.firestore();

export {db};
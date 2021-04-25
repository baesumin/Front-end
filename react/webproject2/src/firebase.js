import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB0Q6c4NRnVfAnOwc_xWyj2r_dGBuW4QeU',
  authDomain: 'happ-7fdc1.firebaseapp.com',
  projectId: 'happ-7fdc1',
  storageBucket: 'happ-7fdc1.appspot.com',
  messagingSenderId: '639753288223',
  appId: '1:639753288223:web:82f0960192ec6e29aa732a',
  measurementId: 'G-2NV1DRLH7D'
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };

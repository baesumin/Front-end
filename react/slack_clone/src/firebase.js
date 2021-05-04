import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyArljfZFCEH-WKuAzP4OsMYflz2EVX5sHk',
  authDomain: 'slack-clone-eb0ec.firebaseapp.com',
  projectId: 'slack-clone-eb0ec',
  storageBucket: 'slack-clone-eb0ec.appspot.com',
  messagingSenderId: '866533038674',
  appId: '1:866533038674:web:bf145b1cd269a9c429dd8b',
  measurementId: 'G-T74XJ64KS9'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBHK5Z7NP-dyQNprzSi32__9xGkmaW-xmI',
  authDomain: 'react-blog-project-10c8c.firebaseapp.com',
  projectId: 'react-blog-project-10c8c',
  storageBucket: 'react-blog-project-10c8c.appspot.com',
  messagingSenderId: '191564465458',
  appId: '1:191564465458:web:047329d22f9b3862cec32b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

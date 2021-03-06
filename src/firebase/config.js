import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyD1_JYjxlTVYNDja00-2xxCVv1J1NXn1gk',
  authDomain: 'yoseob-kunstgram.firebaseapp.com',
  projectId: 'yoseob-kunstgram',
  storageBucket: 'yoseob-kunstgram.appspot.com',
  messagingSenderId: '388875357149',
  appId: '1:388875357149:web:391aeece9ae830924ac434',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

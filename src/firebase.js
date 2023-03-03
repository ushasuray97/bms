import firebase from 'firebase/compat/app';
import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/firestore';



const firebaseConfig = {
  // Paste your app's configuration object here
  apiKey: "AIzaSyCP2FwoiTAAFXSxB6qcDsbesd372kb1PDc",
  authDomain: "bookmyshow-clone-d3f70.firebaseapp.com",
  projectId: "bookmyshow-clone-d3f70",
  storageBucket: "bookmyshow-clone-d3f70.appspot.com",
  messagingSenderId: "45600644476",
  appId: "1:45600644476:web:fdd3841ffe524f6735d8f9",
  measurementId: "G-N97PTS94C2"
};

const app=initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = firebase.firestore();
export default firebase;
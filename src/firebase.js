import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/functions';

const config = {
  apiKey: import.meta.env.VITE_REACT_APP_FIRE_BASE_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIRE_BASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_REACT_APP_FIRE_BASE_DB_URL,
  projectId: import.meta.env.VITE_REACT_APP_FIRE_BASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIRE_BASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_FIRE_BASE_APP_ID,
  measurementId: import.meta.env.VITE_REACT_APP_FIRE_BASE_MEASURMENT_ID,
};

firebase.initializeApp(config);
firebase.firestore();
firebase.storage();

export default firebase;

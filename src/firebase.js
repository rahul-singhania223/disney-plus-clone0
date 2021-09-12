import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSa6ZWUq-2lejLCXQkx1-RaE9VuotVe28",
  authDomain: "desney-plus-clone.firebaseapp.com",
  projectId: "desney-plus-clone",
  storageBucket: "desney-plus-clone.appspot.com",
  messagingSenderId: "692319702199",
  appId: "1:692319702199:web:9da765f11089129b22d132",
  measurementId: "G-W14K932Q6C"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);

export { provider, storage, auth };
export default db;
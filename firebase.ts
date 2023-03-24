import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKjWUn8w92NEZIP3piZJfOYp3yqQBJYpE",
  authDomain: "ai-chatbot-messenger.firebaseapp.com",
  projectId: "ai-chatbot-messenger",
  storageBucket: "ai-chatbot-messenger.appspot.com",
  messagingSenderId: "96497448903",
  appId: "1:96497448903:web:493b28d40692b1a2d60be2"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);




export { db };
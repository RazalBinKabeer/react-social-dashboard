import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBskdjiK0al-n9kTI_wwyYBEU9B0SHD1s0",
  authDomain: "social-media-dashboard-2ae83.firebaseapp.com",
  projectId: "social-media-dashboard-2ae83",
  storageBucket: "social-media-dashboard-2ae83.appspot.com",
  messagingSenderId: "1050282069462",
  appId: "1:1050282069462:web:982fad88ef31f37930e877",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAhHynl_7HF-o2H32N9jn9U-5jfEni80k8",
  authDomain: "scratch-dad0b.firebaseapp.com",
  projectId: "scratch-dad0b",
  storageBucket: "scratch-dad0b.appspot.com",
  messagingSenderId: "161082101268",
  appId: "1:161082101268:web:be826e9a8943f424c72101",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);


import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD861vluPX_Jet7HKhSNxvKcTKvdMhkTmg",
  authDomain: "clone-1a902.firebaseapp.com",
  projectId: "clone-1a902",
  storageBucket: "clone-1a902.appspot.com",
  messagingSenderId: "217393469675",
  appId: "1:217393469675:web:9d6f82abe1220cacae46ae"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
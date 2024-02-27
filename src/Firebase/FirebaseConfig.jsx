import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAOWB6voVjlVOH7--VDUUqy45gwv3Y8R_U",
  authDomain: "complete-ecommerce-website.firebaseapp.com",
  projectId: "complete-ecommerce-website",
  storageBucket: "complete-ecommerce-website.appspot.com",
  messagingSenderId: "621486274903",
  appId: "1:621486274903:web:eeb38e10d888d596366612",
};

export const app = initializeApp(firebaseConfig);
export const FireDB = getFirestore(app);
export const auth = getAuth(app);
export default { FireDB, auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxJUOi9daAriJ4rgw9wFkwVyU1yZ3lg8M",
  authDomain: "leetcode-board-dac31.firebaseapp.com",
  projectId: "leetcode-board-dac31",
  storageBucket: "leetcode-board-dac31.appspot.com",
  messagingSenderId: "811650069362",
  appId: "1:811650069362:web:79883b21125d9a1d3f23eb",
  measurementId: "G-HPTNTLFD3T",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

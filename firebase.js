import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export const app = initializeApp({
  apiKey: "AIzaSyAtotOQduDnlSCQHQwtVN_LCycAYXgCnkI",
  authDomain: "platea-orders-57da6.firebaseapp.com",
  projectId: "platea-orders-57da6",
  storageBucket: "platea-orders-57da6.firebasestorage.app",
  messagingSenderId: "116324224557",
  appId: "1:116324224557:web:7c3f793e3e82f9dad672a4"
});
export const auth = getAuth(app);
export const db = getFirestore(app);

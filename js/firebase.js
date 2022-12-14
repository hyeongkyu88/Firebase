// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";

// 아래 데이터는 본인의 Firebase 프로젝트 설정에서 확인할 수 있습니다.
const firebaseConfig = {
  apiKey: "AIzaSyDtYfPOfBxhZYsVYzAkNIHY5Gb_seuZl3I",
  authDomain: "fir-spa-38b90.firebaseapp.com",
  projectId: "fir-spa-38b90",
  storageBucket: "fir-spa-38b90.appspot.com",
  messagingSenderId: "397294494260",
  appId: "1:397294494260:web:aa198d608252280f832061",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);
export const storageService = getStorage(app);

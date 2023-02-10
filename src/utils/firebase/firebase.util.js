import { initializeApp } from "firebase/app";

///////////////////////////////////// firebase init ///////////////////////////////////////////////
//firebase instance initial, refer to project
const firebaseConfig = {
  apiKey: "AIzaSyD4VtjeDGdpk8PDsaTOkIRmM17Z_IsVYsk",
  authDomain: "crwn-clothing-db-2ee97.firebaseapp.com",
  projectId: "crwn-clothing-db-2ee97",
  storageBucket: "crwn-clothing-db-2ee97.appspot.com",
  messagingSenderId: "332224956597",
  appId: "1:332224956597:web:5d3434e140dcdcacedd6fc",
};
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

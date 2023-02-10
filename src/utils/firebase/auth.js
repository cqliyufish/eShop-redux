// lib for authentication
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";
import firebaseApp from "./firebase.util";

///////////////////////////////////// sign in with google popup ///////////////////////////////////////////////

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

///////////////////////////////////// sign in with facebook popup ///////////////////////////////////////////////

const FacebookProvider = new FacebookAuthProvider();
export const signInWithFacebookPopup = () =>
  signInWithPopup(auth, FacebookProvider);

////////////////////////////////////// password sign in ///////////////////////////////////////////////////////////////////////////

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

////////////////////////////////////// password sign up ///////////////////////////////////////////////////////////////////////////

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
////////////////////////////////// sign out ///////////////////////////////////////////////////////////////////////////

export const signOutUser = async () => await signOut(auth);

////////////////////////////////// observable auth change ///////////////////////////////////////////////////////////////////////////

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback); //once auth changes, run callback

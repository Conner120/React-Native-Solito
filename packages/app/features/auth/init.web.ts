// please note that firebase auth adds about 30kb to your bundle size on Web
import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  browserPopupRedirectResolver,
  browserLocalPersistence,
  signInAnonymously as signInAnonymouslyFirebase,
  onAuthStateChanged as onAuthStateChangedFirebase,
} from 'firebase/auth';
import { Firebase } from './types';
console.log('firebase web');

let auth: ReturnType<typeof initializeAuth>;

if (typeof window !== 'undefined') {
  const firebaseApp = initializeApp({
    apiKey: 'AIzaSyA3B9FL1Nor_6ZV_su_thA8Zi5_LB5yzew',
    authDomain: 'my-family-movie.firebaseapp.com',
    projectId: 'my-family-movie',
    storageBucket: 'my-family-movie.appspot.com',
    messagingSenderId: '102632806390',
    appId: '1:102632806390:web:70e60a5917b1a23a0219d7',
    measurementId: 'G-07TVHG6FXJ',
  });

  auth = initializeAuth(firebaseApp, {
    persistence: browserLocalPersistence,
  });
}

const getIsSignedIn: Firebase['getIsSignedIn'] = () =>
  Boolean(auth?.currentUser);

const signOut: Firebase['signOut'] = () => auth.signOut();

const signInAnonymously: Firebase['signInAnonymously'] = async () => {
  return (await signInAnonymouslyFirebase(auth)).user;
};
const signInWithEmailAndPassword: Firebase['signInWithEmailAndPassword'] =
  async (email, password) => {
    return await signInWithEmailAndPassword(email, password);
  };

const onAuthStateChanged: Firebase['onAuthStateChanged'] = (callback) => {
  return onAuthStateChangedFirebase(auth, callback);
};

const getCurrentUser: Firebase['getCurrentUser'] = () => auth.currentUser;

const getIdToken: Firebase['getIdToken'] = () => {
  return new Promise<string | null>((resolve, reject) => {
    auth.currentUser?.getIdToken().then((idToken) => {
      resolve(idToken);
    });
  });
};

export {
  getIsSignedIn,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
  getCurrentUser,
  signInWithEmailAndPassword,
  getIdToken,
};

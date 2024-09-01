import { Firebase } from './types';
import { Platform } from 'react-native';
console.log('firebase native');
let getIsSignedIn: Firebase['getIsSignedIn'];
let signOut: Firebase['signOut'];
let signInAnonymously: Firebase['signInAnonymously'];
let signInWithEmailAndPassword: Firebase['signInWithEmailAndPassword'];
let onAuthStateChanged: Firebase['onAuthStateChanged'];
let getCurrentUser: Firebase['getCurrentUser'];
let getIdToken: Firebase['getIdToken'];
if (Platform.isTV === true) {
  //not implemented
  getIsSignedIn = () => false;
  signOut = () => {};
  signInAnonymously = async () => {
    return null;
  };
  signInWithEmailAndPassword = async () => {
    return null;
  };
  onAuthStateChanged = () => {};
  getCurrentUser = () => null;
  getIdToken = () => {
    return new Promise<string | null>((resolve, reject) => {
      resolve(null);
    });
  };
} else {
  const { auth } = require('firebase/auth');

  getIsSignedIn = () => Boolean(auth().currentUser);

  signOut = () => auth().signOut();

  signInAnonymously = async () => {
    return (await auth().signInAnonymously()).user;
  };

  signInWithEmailAndPassword = async (email, password) => {
    console.log('signInWithEmailAndPassword');
    return (await auth().signInWithEmailAndPassword(email, password)).user;
  };

  onAuthStateChanged = (callback) => {
    return auth().onAuthStateChanged(callback);
  };

  getCurrentUser = () => auth().currentUser;

  getIdToken = () => {
    return new Promise<string | null>((resolve, reject) => {
      auth()
        .currentUser?.getIdToken()
        .then((idToken) => {
          resolve(idToken);
        });
    });
  };
}
export {
  getIsSignedIn,
  signOut,
  signInAnonymously,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getCurrentUser,
  getIdToken,
};

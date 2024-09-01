import type * as firebase from 'firebase/auth';

type User = Pick<firebase.User, 'uid'>;

export type Firebase = {
  getIsSignedIn: () => boolean;
  signInAnonymously: () => Promise<User>;
  signOut: () => Promise<void>;
  signInWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<User>;
  onAuthStateChanged: (
    callback: (user: { uid: string } | null) => void
  ) => () => void;
  getCurrentUser: () => User | null;
  getIdToken: () => Promise<string | null>;
};

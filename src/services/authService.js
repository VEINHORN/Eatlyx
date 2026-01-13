import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export function signInUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signOutUser() {
  return signOut(auth);
}

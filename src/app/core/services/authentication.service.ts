import {Injectable} from '@angular/core';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import {db} from "../../../firebase.config";
import {RoleService} from "@app/core/services/role.service";
import {doc, getDoc, setDoc} from "firebase/firestore";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  auth = getAuth();

  constructor(private roleService: RoleService) {
  }

  async signUp(email: string, password: string) {
    const userRef = doc(db, 'users', email);
    await createUserWithEmailAndPassword(this.auth, email, password);
    return await setDoc(userRef, {role: 'customer'});
  }

  async logInWithGoogle() {
    const userCredentials = await signInWithPopup(this.auth, new GoogleAuthProvider());
    const email = userCredentials.user.email;
    if (email) {
      const userRef = doc(db, 'users', email);
      await setDoc(userRef, {role: 'customer'});
      const userDoc = await getDoc(userRef);
      const role = userDoc.data()?.['role'];
      return this.roleService.setUserRole(role);
    }
  }

  async logIn(email: string, password: string) {
    const userRef = doc(db, 'users', email);
    const userDoc = await getDoc(userRef);
    const role = userDoc.data()?.['role'];
    await signInWithEmailAndPassword(this.auth, email, password);
    return this.roleService.setUserRole(role);
  }

  logOut() {
    this.roleService.logout();
    return signOut(this.auth);
  }
}

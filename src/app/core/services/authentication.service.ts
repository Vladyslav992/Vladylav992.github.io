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
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  auth = getAuth();

  constructor(private roleService: RoleService, private router: Router) {
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
      this.roleService.setUserRole(role);
      this.router.navigate(['/shop']);
    }
  }

  async logIn(email: string, password: string) {
    const userRef = doc(db, 'users', email);
    const userDoc = await getDoc(userRef);
    const role = userDoc.data()?.['role'];
    await signInWithEmailAndPassword(this.auth, email, password);
    this.roleService.setUserRole(role);
    this.router.navigate(['/shop']);
  }

  logOut() {
    this.roleService.logout();
    return signOut(this.auth);
  }
}

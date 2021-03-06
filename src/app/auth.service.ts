import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Appuser } from "./models/app-user";
import { UserService } from "./user.service";
import { switchMap } from "rxjs/operators";
import { of as observableOf } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute
  ) {
    this.user$ = afAuth.authState;
  }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/";
    localStorage.setItem("returnUrl", returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<Appuser> {
    return this.user$.pipe(
      switchMap((user: firebase.User) => {
        if (user) {
          return this.userService.get(user.uid).valueChanges();
        }
        return observableOf(null);
      })
    );
  }
}

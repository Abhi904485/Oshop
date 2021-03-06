import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";
import { Appuser } from "./models/app-user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private db: AngularFireDatabase) {}

  save(user: firebase.User) {
    this.db.object("/users/" + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: String): AngularFireObject<Appuser> {
    return this.db.object("/users/" + uid)
  }
}

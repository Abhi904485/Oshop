import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import { Appuser } from "../models/app-user";

@Component({
  selector: "app-bs-navbar",
  templateUrl: "./bs-navbar.component.html",
  styleUrls: ["./bs-navbar.component.scss"]
})
export class BsNavbarComponent {
  appUser: Appuser;
  constructor(private auth: AuthService) {
    this.auth.appUser$.subscribe(appUser => (this.appUser = appUser));
  }

  logout() {
    this.auth.logout();
  }
}

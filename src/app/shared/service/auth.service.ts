import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}
  private isUserLogin = new BehaviorSubject<boolean>(true);
  isUserLoginNotify = this.isUserLogin.asObservable();
  login() {
    this.isUserLogin.next(true);
  }

  loggout() {
    this.isUserLogin.next(false);
  }
}

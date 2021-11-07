import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { MatSidenav } from "@angular/material";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";
import { AuthService } from "src/app/shared/service/auth.service";

@Component({
  selector: "app-main-layout",
  templateUrl: "./main-layout.component.html",
  styleUrls: ["./main-layout.component.css"],
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  title = "mat-app";
  isLoggedIn: boolean = true;
  @ViewChild("sidenav2", { static: false }) public sidenav2: MatSidenav;
  @ViewChild("sidenav", { static: false }) public sidenav: MatSidenav;
  private mediaSub: Subscription;
  constructor(
    private mediaObserver: MediaObserver,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.mediaSub = this.mediaObserver
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((change: MediaChange) => {
        if (this.isLoggedIn && change.mqAlias === "sm") {
          if (this.sidenav.opened) {
            this.sidenav.close();
          }
        }

        if (this.isLoggedIn && change.mqAlias === "md") {
          if (!this.sidenav.opened) {
            this.sidenav.open();
          }
        }
      });

    this.authService.isUserLoginNotify.subscribe((value) => {
      this.isLoggedIn = value;
      if (!this.isLoggedIn) {
        this.router.navigate(["login"]);
      }
    });
  }

  ngOnDestroy() {
    this.mediaSub && this.mediaSub.unsubscribe();
  }

  logout() {
    this.authService.loggout();
  }
}

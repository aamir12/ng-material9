import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { MatSidenav } from "@angular/material";
import { Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = "mat-app";
  isLoggedIn: boolean = true;
  @ViewChild("sidenav2", { static: false }) public sidenav2: MatSidenav;
  @ViewChild("sidenav", { static: false }) public sidenav: MatSidenav;
  private mediaSub: Subscription;
  constructor(private mediaObserver: MediaObserver) {}
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
  }
  ngAfterViewInit() {}

  ngOnDestroy() {
    this.mediaSub && this.mediaSub.unsubscribe();
  }
}

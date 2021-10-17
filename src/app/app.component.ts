import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  title = "mat-app";
  isLoggedIn: boolean = true;
  @ViewChild("sidenav2", { static: false }) public sidenav2: MatSidenav;

  ngAfterViewInit() {}
}

import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { FormControl } from "@angular/forms";
import { Subscription } from "rxjs";
import { map, filter } from "rxjs/operators";

@Component({
  selector: "app-fx-design",
  templateUrl: "./fx-design.component.html",
  styleUrls: ["./fx-design.component.scss"],
})
export class FxDesignComponent implements OnInit, AfterViewInit, OnDestroy {
  private mediaSub: Subscription;
  myControl = new FormControl();
  options: string[] = ["One", "Two", "Three"];
  deviceSize: string;
  toggleSearch: boolean;
  constructor(
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver
  ) {}

  ngOnInit() {
    this.toggleSearch = false;
    this.mediaSub = this.mediaObserver
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((change: MediaChange) => {
        this.deviceSize = change.mqAlias;
        console.log(change.mqAlias);
        console.log(change.mediaQuery);
      });

    //deprecated
    // .media$.subscribe(
    //   (change: MediaChange) => {
    //     console.log(change.mqAlias);
    //     console.log(change.mediaQuery);
    //   }
    // );
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    this.mediaSub && this.mediaSub.unsubscribe();
  }

  search() {
    console.log("Search Data");
  }

  doSearch() {
    if (this.deviceSize !== "xs") {
      this.search();
      return;
    }
    this.toggleSearch = !this.toggleSearch;
  }
}

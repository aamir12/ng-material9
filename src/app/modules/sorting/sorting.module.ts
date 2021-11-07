import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { SortingComponent } from "./sorting.component";
import { SortingRoutingModule } from "./sorting-routing.module";

@NgModule({
  declarations: [SortingComponent],
  imports: [CommonModule, SharedModule, SortingRoutingModule],
})
export class SortingModule {}

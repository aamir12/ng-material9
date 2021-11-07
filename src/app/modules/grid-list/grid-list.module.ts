import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GridListRoutingModule } from "./grid-list-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { GridListComponent } from "./grid-list.component";
//1) SharedModule need to import every lazy loaded module
//2) GridListRoutingModule is act as routing module. RoutingModule need to define for every module.
//3) include all the component that is used in GridListModule
@NgModule({
  declarations: [GridListComponent],
  imports: [CommonModule, SharedModule, GridListRoutingModule],
})
export class GridListModule {}

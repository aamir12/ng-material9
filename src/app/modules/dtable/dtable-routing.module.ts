import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DTableComponent } from "./dtable.component";

const routes: Routes = [
  {
    path: "",
    component: DTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DTableRoutingModule {}

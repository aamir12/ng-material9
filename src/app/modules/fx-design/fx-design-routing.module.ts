import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FxDesignComponent } from "./fx-design.component";

const routes: Routes = [
  {
    path: "",
    component: FxDesignComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FxDesignRoutingModule {}

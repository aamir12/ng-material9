import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FlexlayoutComponent } from "./flexlayout.component";

const routes: Routes = [
  {
    path: "",
    component: FlexlayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlexlayoutRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoutletComponent } from "./routlet.component";

const routes: Routes = [
  {
    path: "",
    component: RoutletComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ROutletRoutingModule {}

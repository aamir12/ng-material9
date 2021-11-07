import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResponsiveLayoutComponent } from "./responsive-layout.component";

const routes: Routes = [
  {
    path: "",
    component: ResponsiveLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponsiveLayoutRoutingModule {}

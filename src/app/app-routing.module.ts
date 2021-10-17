import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GridListComponent } from "./grid-list/grid-list.component";
import { StepperComponent } from "./stepper/stepper.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ExpansionPanelComponent } from "./expansion-panel/expansion-panel.component";
import { TableComponent } from "./table/table.component";
import { FormComponent } from "./form/form.component";
import { LoginComponent } from "./login/login.component";
import { SortingComponent } from "./sorting/sorting.component";
import { FlexlayoutComponent } from "./flexlayout/flexlayout.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "grid-list",
    component: GridListComponent,
  },
  {
    path: "stepper",
    component: StepperComponent,
  },
  {
    path: "tabs",
    component: TabsComponent,
  },
  {
    path: "expansion-panel",
    component: ExpansionPanelComponent,
  },
  {
    path: "table",
    component: TableComponent,
  },
  {
    path: "form",
    component: FormComponent,
  },
  {
    path: "sorting",
    component: SortingComponent,
  },
  {
    path: "flexlayout",
    component: FlexlayoutComponent,
  },
  { path: "", redirectTo: "/grid-list", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./main-layout/main-layout.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/grid-list",
    pathMatch: "full",
  },
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "grid-list",
        loadChildren: () =>
          import("../modules/grid-list/grid-list.module").then(
            (m) => m.GridListModule
          ),
      },
      {
        path: "stepper",
        loadChildren: () =>
          import("../modules/stepper/stepper.module").then(
            (m) => m.StepperModule
          ),
      },
      {
        path: "tabs",
        loadChildren: () =>
          import("../modules/tabs/tabs.module").then((m) => m.TabsModule),
      },
      {
        path: "expansion-panel",
        loadChildren: () =>
          import("../modules/expansion-panel/expansion-panel.module").then(
            (m) => m.ExpansionPanelModule
          ),
      },
      {
        path: "table",
        loadChildren: () =>
          import("../modules/table/table.module").then((m) => m.TableModule),
      },
      {
        path: "form",
        loadChildren: () =>
          import("../modules/form/form.module").then((m) => m.FormModule),
      },
      {
        path: "sorting",
        loadChildren: () =>
          import("../modules/sorting/sorting.module").then(
            (m) => m.SortingModule
          ),
      },
      {
        path: "flexlayout",
        loadChildren: () =>
          import("../modules/flexlayout/flexlayout.module").then(
            (m) => m.FlexlayoutModule
          ),
      },
      {
        path: "flexDesign",
        loadChildren: () =>
          import("../modules/fx-design/fx-design.module").then(
            (m) => m.FxDesignModule
          ),
      },
      {
        path: "employees",
        loadChildren: () =>
          import("../modules/employees/employee.module").then(
            (m) => m.EmployeeModule
          ),
      },
      {
        path: "responsiveLayout",
        loadChildren: () =>
          import("../modules/responsive-layout/responsive-layout.module").then(
            (m) => m.ResponsiveLayoutModule
          ),
      },
      {
        path: "matInputs",
        loadChildren: () =>
          import("../modules/material-inputs/material-inputs.module").then(
            (m) => m.MaterialInputsModule
          ),
      },
      {
        path: "routlet",
        loadChildren: () =>
          import("../modules/routlet/routlet.module").then(
            (m) => m.RoutletModule
          ),
      },
      {
        path:"expandCard",
        loadChildren:() => import('../modules/expand-card/expand-card.module').then(m=>m.ExpandCardModule)
      }
      
    ],
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "login",
        loadChildren: () =>
          import("../modules/login/login.module").then((m) => m.LoginModule),
      },
    ],
  },

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MInputsComponent } from "./m-inputs.component";
import { MatCheckComponent } from "./mat-check/mat-check.component";
import { SelectSearchComponent } from "./select-search/select-search.component";
import { SelectComponent } from "./select/select.component";


const routes: Routes = [
  {
    path: "",
    component: MInputsComponent,
    children:[
        {
          path:'',
          component:MatCheckComponent,
          pathMatch:"full"
        },
        {
            path:'checkbox',
            component:MatCheckComponent
        },
        {
            path:'autocomplete',
            component:SelectSearchComponent
        },
        {
          path:'select',
          component:SelectComponent
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialInputsRoutingModule {}

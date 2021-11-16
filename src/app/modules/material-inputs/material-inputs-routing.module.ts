import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DatepickComponent } from "./datepick/datepick.component";
import { InputsComponent } from "./inputs/inputs.component";
import { MInputsComponent } from "./m-inputs.component";
import { MatCheckComponent } from "./mat-check/mat-check.component";
import { SelectSearchComponent } from "./select-search/select-search.component";
import { SelectComponent } from "./select/select.component";
import { SlideToggleComponent } from "./slide-toggle/slide-toggle.component";


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
        },
        {
          path:'toggle',
          component:SlideToggleComponent
        },
        {
          path: 'datePicker',
          component:DatepickComponent
        },
        {
          path: 'inputs',
          component:InputsComponent
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialInputsRoutingModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { FormRoutingModule } from "./form-routing.module";
import { FormComponent } from "./form.component";

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, SharedModule, FormRoutingModule],
})
export class FormModule {}

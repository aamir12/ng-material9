import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { FormRoutingModule } from "./form-routing.module";
import { FormComponent } from "./form.component";
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ArryFormComponent } from './arry-form/arry-form.component';
import { FileArrayComponent } from './file-array/file-array.component';
import { FrmGrpArrayComponent } from './frm-grp-array/frm-grp-array.component';
import { CreditcardFormComponent } from './creditcard-form/creditcard-form.component';

@NgModule({
  declarations: [FormComponent, BasicFormComponent, ArryFormComponent, FileArrayComponent, FrmGrpArrayComponent, CreditcardFormComponent],
  imports: [CommonModule, SharedModule, FormRoutingModule],
})
export class FormModule {}

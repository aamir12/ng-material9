import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { MaterialModule } from "./material/material.module";
@NgModule({
  declarations: [],
  imports: [ReactiveFormsModule, FormsModule, MaterialModule, FlexLayoutModule],
  exports: [ReactiveFormsModule, FormsModule, MaterialModule, FlexLayoutModule],
})
export class SharedModule {}

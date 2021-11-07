import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResponsiveLayoutComponent } from "./responsive-layout.component";
import { SharedModule } from "../../shared/shared.module";
import { ResponsiveLayoutRoutingModule } from "./responsive-layout-routing.module";

@NgModule({
  declarations: [ResponsiveLayoutComponent],
  imports: [CommonModule, SharedModule, ResponsiveLayoutRoutingModule],
})
export class ResponsiveLayoutModule {}

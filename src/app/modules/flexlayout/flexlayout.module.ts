import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FlexlayoutRoutingModule } from "./flexlayout-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { FlexlayoutComponent } from "./flexlayout.component";

@NgModule({
  declarations: [FlexlayoutComponent],
  imports: [CommonModule, SharedModule, FlexlayoutRoutingModule],
})
export class FlexlayoutModule {}

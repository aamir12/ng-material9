import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ExpansionPanelRoutingModule } from "./expansion-panel-routing.module";
import { ExpansionPanelComponent } from "./expansion-panel.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [ExpansionPanelComponent],
  imports: [CommonModule, SharedModule, ExpansionPanelRoutingModule],
})
export class ExpansionPanelModule {}

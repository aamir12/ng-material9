import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { TabsComponent } from "./tabs.component";
import { TabsRoutingModule } from "./tabs-routing.module";
@NgModule({
  declarations: [TabsComponent],
  imports: [CommonModule, SharedModule, TabsRoutingModule],
})
export class TabsModule {}

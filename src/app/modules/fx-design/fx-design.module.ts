import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FxDesignComponent } from "./fx-design.component";
import { SharedModule } from "../../shared/shared.module";
import { FxDesignRoutingModule } from "./fx-design-routing.module";

@NgModule({
  declarations: [FxDesignComponent],
  imports: [CommonModule, SharedModule, FxDesignRoutingModule],
})
export class FxDesignModule {}

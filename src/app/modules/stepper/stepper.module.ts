import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { StepperComponent } from "./stepper.component";
import { StepperRoutingModule } from "./stepper-routing.module";

@NgModule({
  declarations: [StepperComponent],
  imports: [CommonModule, SharedModule, StepperRoutingModule],
})
export class StepperModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeeRoutingModule } from "./employee-routing.module";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeesComponent } from "./employees.component";

import { EmployeeService } from "./employee.service";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [EmployeeComponent, EmployeesComponent],
  imports: [CommonModule, EmployeeRoutingModule, SharedModule],
  providers: [EmployeeService],
})
export class EmployeeModule {}

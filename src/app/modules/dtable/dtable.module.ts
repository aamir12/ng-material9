import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DTableComponent } from "./dtable.component";
import { SharedModule } from "../../shared/shared.module";
import { DTableRoutingModule } from "./dtable-routing.module";
import { DTableService } from "./dtable.service";
import { CoursesService } from "./course.service";
@NgModule({
  declarations: [DTableComponent],
  imports: [CommonModule, SharedModule, DTableRoutingModule],
  providers:[DTableService,CoursesService]
})
export class DTableModule {}

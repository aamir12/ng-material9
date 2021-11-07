import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { SideBarComponent } from "../shared/components/side-bar/side-bar.component";

import { SharedModule } from "../shared/shared.module";
import { LayoutRoutingModule } from "./layout-routing.module";
//1) Layout Module act like app.module.ts
//2) LayoutRoutingModule act like app-routing.module.ts
//3) include all the component that is used in layout component
@NgModule({
  declarations: [AuthLayoutComponent, MainLayoutComponent, SideBarComponent],
  imports: [CommonModule, SharedModule, LayoutRoutingModule],
})
export class LayoutModule {}

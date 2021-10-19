import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

import { GridListComponent } from "./grid-list/grid-list.component";
import { StepperComponent } from "./stepper/stepper.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ExpansionPanelComponent } from "./expansion-panel/expansion-panel.component";
import { TableComponent } from "./table/table.component";
import { FormComponent } from "./form/form.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { HeaderBarComponent } from "./header-bar/header-bar.component";
import { LoginComponent } from "./login/login.component";
import { SortingComponent } from "./sorting/sorting.component";
import { FlexlayoutComponent } from './flexlayout/flexlayout.component';
import { FxDesignComponent } from './fx-design/fx-design.component';

@NgModule({
  declarations: [
    AppComponent,
    GridListComponent,
    StepperComponent,
    TabsComponent,
    ExpansionPanelComponent,
    TableComponent,
    FormComponent,
    SideBarComponent,
    HeaderBarComponent,
    LoginComponent,
    SortingComponent,
    FlexlayoutComponent,
    FxDesignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

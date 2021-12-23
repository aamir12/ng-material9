import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutletComponent } from './routlet.component';
import { ROutletRoutingModule } from './routlet-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RoutletComponent],
  imports: [
    CommonModule,
    SharedModule,
    ROutletRoutingModule
  ]
})
export class RoutletModule { }

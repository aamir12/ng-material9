import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpandCardRoutingModule } from './expand-card-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    ExpandCardRoutingModule,
    SharedModule
  ]
})
export class ExpandCardModule { }

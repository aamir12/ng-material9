import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MInputsComponent } from './m-inputs.component';
import { MaterialInputsRoutingModule } from './material-inputs-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCheckComponent } from './mat-check/mat-check.component';
import { SelectSearchComponent } from './select-search/select-search.component';
import { SelectComponent } from './select/select.component';
import { MatInputsService } from './mat-input.service';

@NgModule({
  declarations: [MInputsComponent, MatCheckComponent, SelectSearchComponent, SelectComponent],
  imports: [
    CommonModule,
    MaterialInputsRoutingModule,
    SharedModule
  ],
  providers:[MatInputsService]
})
export class MaterialInputsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataPanelComponent } from './data-panel.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    DataPanelComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    DataPanelComponent
  ]
})
export class DataPanelModule { }

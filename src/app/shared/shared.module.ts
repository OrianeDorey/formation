import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { TableauComponent } from './components/tableau/tableau.component';

@NgModule({
  declarations: [TotalPipe, StateDirective, TableauComponent],
  exports: [TotalPipe, StateDirective, TableauComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

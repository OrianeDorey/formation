import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { TableauComponent } from './components/tableau/tableau.component';
import { AddRowComponent } from './components/add-row/add-row.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { TemplateModule } from '../template/template.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TotalPipe, StateDirective, TableauComponent, AddRowComponent],
  exports: [TotalPipe, StateDirective, TableauComponent, AddRowComponent, TemplateModule, ReactiveFormsModule, FontAwesomeModule],
  imports: [
    CommonModule, FontAwesomeModule, RouterModule, TemplateModule, ReactiveFormsModule
  ]
})
export class SharedModule { }

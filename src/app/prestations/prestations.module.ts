import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';
import { ListPrestationsComponent } from './components/list-prestations/list-prestations.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';

@NgModule({
  declarations: [PagePrestationsComponent,
    ListPrestationsComponent,
    ItemPrestationComponent,
    PageAddPrestationComponent,
    AddPrestationComponent],
  imports: [
    CommonModule, PrestationsRoutingModule, SharedModule
  ]
})
export class PrestationsModule { }

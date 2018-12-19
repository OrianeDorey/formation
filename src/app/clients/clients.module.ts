import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientsRoutingModule } from './clients-routing.module';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { ItemClientComponent } from './components/item-client/item-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageClientsComponent, ItemClientComponent, ListClientComponent],
  imports: [
    CommonModule, ClientsRoutingModule, SharedModule
  ]
})
export class ClientsModule { }

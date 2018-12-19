import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientsRoutingModule } from './clients-routing.module';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { ItemClientComponent } from './components/item-client/item-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { SharedModule } from '../shared/shared.module';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { AddClientComponent } from './containers/add-client/add-client.component';

@NgModule({
  declarations: [PageClientsComponent, ItemClientComponent, ListClientComponent, PageAddClientComponent, AddClientComponent],
  imports: [
    CommonModule, ClientsRoutingModule, SharedModule
  ]
})
export class ClientsModule { }

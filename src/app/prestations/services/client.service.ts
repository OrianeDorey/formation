import { Injectable } from '@angular/core';
import { fakeClients } from './fake-clients';
import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _collection: Client[];

  constructor() {
    this._collection = fakeClients;
   }

   public get collection(): Client[] {
     return this._collection;
   }

   public set collection(col: Client[]) {
     this._collection = col;
   }

   public update(item: Client, state: StateClient) {
    item.state = state;
    console.log(item.state);
  }

}

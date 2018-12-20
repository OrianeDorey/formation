import { Injectable } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakePrestation } from './fake-prestations';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private _collection: Prestation[];
  constructor() {
    this.collection = fakePrestation;
   }

  // get collection
  public get collection(): Prestation[] {
    return this._collection;
  }

  // set collection
  public set collection(col: Prestation[]) {
    this._collection = col;
  }

  public update(item: Prestation, state: State) {
    item.state = state;
    console.log(item.state);
  }

  public add(item: Prestation) {
    this.collection.push(new Prestation(item));
  }

  // delete item in collection

  // get item by id
}
